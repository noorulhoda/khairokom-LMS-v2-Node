const CustomerController  = require('../controllers/CustomerController');

module.exports = (app) =>{
  app.get('/api/customer',
    CustomerController.all);

   app.get('/', function(req, res){
      res.send('hellooo')
  });
  app.post('/api/customer',
    CustomerController.create);

  app.put('/api/customer/:id',
   CustomerController.edit);

  app.delete('/api/customer/:id',
   CustomerController.delete)
}