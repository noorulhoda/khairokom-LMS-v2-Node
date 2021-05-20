const Category = require('../models/Category.model');

module.exports = {
  
  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Category.find({}).limit(limit)
    .then(Categories => res.status(200).send(Categories))
    .catch(next)
  },

  create(req, res, next){
    const categoryProps = req.body;
    console.log(categoryProps);
    Category.create(categoryProps)
      .then(category =>
        res.status(201).send(category)) 
      .catch(next) 

  },

 edit(req, res, next){
    const categoryId = req.params.id;
    const categoryProps = req.body;
    Category.findByIdAndUpdate({_id: categoryId}, categoryProps)
    .then(() => Category.findById({_id: categoryId}))
    .then(category => res.status(200).send(category))
    .catch(next);
  },

  delete(req, res, next){
    const categoryId = req.params.id;
    Category.findByIdAndRemove({_id: categoryId})
      .then(category => res.status(204).send(category))
      .catch(next);
  },
   findById(req, res, next){
    Category.find({_id:req.params.id}).limit(1)
    .then(category => res.status(200).send(category))
    .catch(next)
  }
};