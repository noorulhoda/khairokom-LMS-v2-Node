const FeedbackController  = require('../controllers/feedback.controller');

module.exports = (app) =>{
  app.get('/api/feedback',
  FeedbackController.all);

  app.post('/api/feedback',
  FeedbackController.create);

  app.put('/api/feedback/:id',
  FeedbackController.edit);

  app.delete('/api/feedback/:id',
  FeedbackController.delete);

  app.get('/api/feedback/:id',
  FeedbackController.findById)
}