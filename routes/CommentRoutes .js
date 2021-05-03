const CommentController  = require('../controllers/CommentController');

module.exports = (app) =>{
  app.get('/api/comment',
    CommentController.all);

  app.post('/api/comment',
    CommentController.create);

  app.put('/api/comment/:id',
   CommentController.edit);

  app.delete('/api/comment/:id',
   CommentController.delete)
}