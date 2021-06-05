const RoleController  = require('../controllers/role.controller');

module.exports = (app) =>{
  app.get('/api/role',
    RoleController.all);

  app.post('/api/role',
    RoleController.create);

  app.put('/api/role/:id',
   RoleController.edit);

  app.delete('/api/role/:id',
   RoleController.delete);

  app.get('/api/role/:id',
   RoleController.findById)

  app.get('/api/role/withType/:type',
   RoleController.findByRoleType)
   
}