const userController  = require('../controllers/user.controller');
const middleware = require('../middlewares')

module.exports = (app) =>{
app.get('/api/user',
    userController.all);

 app.post('/api/user/register',
    userController.create);

app.post('/api/user/login', 
    userController.login
    )
  app.put('/api/user/:id',
   userController.edit);

  app.delete('/api/user/:id',
   userController.delete)

   app.get('api/user/name/:userName',
    userController.findByUserName
    )
    app.get('/api/user/:id',
    userController.findById)

}