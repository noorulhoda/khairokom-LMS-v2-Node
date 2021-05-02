const CustomerController  = require(__dirname+'controllers/CustomerController');

module.exports = (app) =>{
  app.get('/api/customer',
    CustomerController.all);

   app.get('/', function(req, res){
      res.send('hellooooooooooo')
  });
  app.post('/api/customer',
    CustomerController.create);

  app.put('/api/customer/:id',
   CustomerController.edit);

  app.delete('/api/customer/:id',
   CustomerController.delete)
}