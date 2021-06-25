const MessageController  = require('../controllers/message.controller');

module.exports = (app) =>{
  app.get('/api/message',
  MessageController.all);

  app.post('/api/message',
  MessageController.create);

  app.put('/api/message/:id',
  MessageController.edit);

  app.delete('/api/message/:id',
  MessageController.delete);

  app.get('/api/message/:id',
  MessageController.findById)
}