const Class = require('../models/Class.model');

module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Class.find({}).limit(limit)
    .then(Classes => res.status(200).send(Classes))
    .catch(next)
  },

  create(req, res, next){
    const classProps = req.body;
    console.log(classProps);
    Class.create(classProps)
      .then(clas =>
        res.status(201).send(clas)) 
      .catch(next) 

  },

 edit(req, res, next){
    const classId = req.params.id;
    const classProps = req.body;
    Class.findByIdAndUpdate({_id: classId}, classProps)
    .then(() => Class.findById({_id: classId}))
    .then(clas => res.status(200).send(clas))
    .catch(next);
  },

  delete(req, res, next){
    const classId = req.params.id;
    Class.findByIdAndRemove({_id: classId})
      .then(clas => res.status(204).send(clas))
      .catch(next);
  }
};