const NotificationController  = require('../controllers/notification.controller');

module.exports = (app) =>{
  app.get('/api/notification',
  NotificationController.all);

  app.post('/api/notification',
  NotificationController.create);

  app.put('/api/notification/:id',
  NotificationController.edit);

  app.delete('/api/notification/:id',
  NotificationController.delete);

  app.get('/api/notification/:id',
  NotificationController.findById)
}