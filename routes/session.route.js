const SessionController  = require('../controllers/session.controller');

module.exports = (app) =>{
  app.get('/api/session',
    SessionController.all);

  app.post('/api/session',
    SessionController.create);

  app.put('/api/session/:id',
   SessionController.edit);

  app.delete('/api/session/:id',
   SessionController.delete);

  app.get('/api/session/:id',
   SessionController.findById)
}