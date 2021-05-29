const Session = require('../models/session.model');



module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Session.find({}).limit(limit)
    .then(sessions => res.status(200).send(sessions))
    .catch(next)
  },

  create(req, res, next){
    const sessionProps = req.body;
    //console.log(sessionProps);
    Session.create(sessionProps)
      .then(session =>
        res.status(201).send(session)) 
      .catch(next);
  },

 edit(req, res, next){
    const SessionId = req.params.id;
    const sessionProps = req.body;
    Session.findByIdAndUpdate({_id: SessionId}, sessionProps)
    .then(() => Session.findById({_id: SessionId}))
    .then(session => res.status(200).send(session))
    .catch(next);
  },

  delete(req, res, next){
    const sessionId = req.params.id;
    Session.findByIdAndRemove({_id: sessionId})
      .then(session => res.status(204).send(session))
      .catch(next);
  },
  findById(req, res, next){
    Session.find({_id:req.params.id}).limit(1)
    .then(session => res.status(200).send(session))
    .catch(next)
  }
};