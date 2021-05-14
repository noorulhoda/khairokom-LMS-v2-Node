const categoryController  = require('../controllers/category.controller');

module.exports = (app) =>{
  app.get('/api/category',
    categoryController.all);

  app.post('/api/category',
    categoryController.create);

  app.put('/api/category/:id',
   categoryController.edit);

  app.delete('/api/catgeory/:id',
   categoryController.delete);

  app.get('/api/catgeory/:id',
   categoryController.findById)
}