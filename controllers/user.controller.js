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
    user.create(userProps)
      .then(user =>
        res.status(201).send(user)) 
      .catch(next) 

  },

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
  }
};