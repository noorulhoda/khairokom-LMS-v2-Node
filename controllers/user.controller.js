const user = require('../models/user.model');

module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    user.find({}).limit(limit)
    .then(users => res.status(200).send(users))
    .catch(next)
  },

  create(req, res, next){
    const userProps = req.body;
    console.log(userProps);
    let existed=false;
    user.find({} , (err, users) => {
      if(err) console.log('erroooooor');
      users.map(account => {
        if(account.email==req.body.email||account.userName==req.body.userName ){
        console.log('this user already taken')
        existed=true;
        return
      }
      })
      if(!existed)
      {
      user.create(userProps)
      .then(user =>
        res.status(201).send(user)) 
      .catch(next)
    }
    res.send('this user already taken');

  })
},

  /*register(req,res,next){
    let users=[];
    const limit = parseInt(req.query.limit) || ''
    user.find({}).limit(limit)
    .then(usrs => users=usrs)
    .catch(next)
    users.forEach(account => {
        if (account.email == req.body.email) {
            return
        }
    })
    users.push(req.body);
    console.log('registeredSuccessfully')
  }
,*/
login(req,res,next){
    console.log("logging");
    let users= this.all;
    user.find({} , (err, users) => {
        if(err) console.log('erroooooor');
        users.map(account => {
            console.log(account.userName +"  "+ req.body.userName)
            if (account.userName == req.body.userName && account.password == req.body.password) {
                console.log("logined successfully");
               return true
            }
          })
                console.log('you are not registered')
                return false
    })
}


,
 edit(req, res, next){
    const userId = req.params.id;
    const userProps = req.body;
    user.findByIdAndUpdate({_id: userId}, userProps)
    .then(() => user.findById({_id: userId}))
    .then(user => res.status(200).send(user))
    .catch(next);
  },

  delete(req, res, next){
    const userId = req.params.id;
    user.findByIdAndRemove({_id: userId})
      .then(user => res.status(204).send(user))
      .catch(next);
  },
  findByUserName(req, res, next){
    user.find({userName:req.params.userName}).limit(1)
    .then(user => res.status(200).send(user))
    .catch(next)
  }
};