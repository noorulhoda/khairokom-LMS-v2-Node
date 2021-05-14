const classController  = require('../controllers/class.controller');

module.exports = (app) =>{
  app.get('/api/class',
    classController.all);

  app.post('/api/class',
    classController.create);

  app.put('/api/class/:id',
   classController.edit);

  app.delete('/api/class/:id',
   classController.delete);

  app.get('/api/class/:id',
   classController.findById)
}