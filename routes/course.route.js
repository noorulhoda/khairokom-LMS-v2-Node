const CourseController  = require('../controllers/CourseController');

module.exports = (app) =>{
  app.get('/api/course',
    CourseController.all);

  app.post('/api/course',
    CourseController.create);

  app.put('/api/course/:id',
   CourseController.edit);

  app.delete('/api/course/:id',
   CourseController.delete)
}