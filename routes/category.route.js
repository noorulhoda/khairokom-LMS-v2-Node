const categoryController  = require('../controllers/category.controller');

module.exports = (app) =>{
  app.get('/api/category',
    categoryController.all);

  app.post('/api/category',
    categoryController.create);

  app.put('/api/category/:id',
   categoryController.edit);

  app.delete('/api/category/:id',
   categoryController.delete);

  app.get('/api/category/:id',
   categoryController.findById)
}