const Country = require('../models/country.model');



module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Country.find({}).limit(limit)
    .then(countrys => res.status(200).send(countrys))
    .catch(next)
  },




  findById(req, res, next){
    Country.find({_id:req.params.id}).limit(1)
    .then(country => res.status(200).send(country))
    .catch(next)
  }
,
  findByName(req, res, next){
    Country.find({_id:req.params.name}).limit(1)
    .then(country => res.status(200).send(country))
    .catch(next)
  }
};