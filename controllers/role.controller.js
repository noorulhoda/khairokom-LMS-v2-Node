const Role = require('../models/role.model');



module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Role.find({}).limit(limit)
    .then(roles => res.status(200).send(roles))
    .catch(next)
  },

  create(req, res, next){
    const roleProps = req.body;
    //console.log(roleProps);
    Role.create(roleProps)
      .then(role =>
        res.status(201).send(role)) 
      .catch(next);
  },

 edit(req, res, next){
    const RoleId = req.params.id;
    const roleProps = req.body;
    Role.findByIdAndUpdate({_id: RoleId}, roleProps)
    .then(() => Role.findById({_id: RoleId}))
    .then(role => res.status(200).send(role))
    .catch(next);
  },

  delete(req, res, next){
    const roleId = req.params.id;
    Role.findByIdAndRemove({_id: roleId})
      .then(role => res.status(204).send(role))
      .catch(next);
  },
  findById(req, res, next){
    Role.find({_id:req.params.id}).limit(1)
    .then(role => res.status(200).send(role))
    .catch(next)
  },
  findByRoleType(req, res, next){
    Role.find({type:req.params.type}).limit(1)
    .then( role=> res.status(200).send(role))
    .catch(next)
  },
  /*findIdByRoleType(req, res, next){
    Role.find({type:req.params.type}).limit(1)
    .then( role=> res.status(200).send(role._id))
    .catch(next)
  }*/
};