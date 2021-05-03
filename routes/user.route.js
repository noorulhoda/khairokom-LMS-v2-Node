const userController  = require('../controllers/user.controller');

module.exports = (app) =>{
  app.get('/api/user',
    userController.all);

   app.get('/', function(req, res){
      res.send('hellooooooooooo')
  });
  app.post('/api/user',
    userController.create);

  app.put('/api/user/:id',
   userController.edit);

  app.delete('/api/user/:id',
   userController.delete)


   app.get('api/profile/:userName', (req, res) => {
    userController.findByUserName
    })

    
//needs more work :)
/*
app.post('/api/register', (req, res) => {
    let users = [];
    const data = fs.readFileSync("./users.json", "utf-8");
    users = JSON.parse(data);

    users.forEach(account => {
        if (account.email == req.body.email) {
            res.redirect("register");
            return
        }
    })
    users.push(req.body)
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
    res.redirect("login")
})


app.post('/api/login', (req, res) => {
    console.log("logging");
    let users =userController.all;
    users.forEach(account => {
        console.log(account.userName +"  "+ req.body.name)
        console.log("checking");
        if (account.name == req.body.name && account.password == req.body.password) {
            console.log("found");
            res.redirect('api/profile/:'+account.userName);
            return
        }
    })
})
*/



}