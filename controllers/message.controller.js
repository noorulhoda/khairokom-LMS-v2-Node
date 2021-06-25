const Message = require('../models/message.model');



module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Message.find({}).limit(limit)
    .then(messages => res.status(200).send(messages))
    .catch(next)
  },

  create(req, res, next){
    const messageProps = req.body;
    Message.create(messageProps)
      .then(message =>
        res.status(201).send(message)) 
      .catch(next);
  },

 edit(req, res, next){
    const MessageId = req.params.id;
    const messageProps = req.body;
    Message.findByIdAndUpdate({_id: MessageId}, messageProps)
    .then(() => Message.findById({_id: MessageId}))
    .then(message => res.status(200).send(message))
    .catch(next);
  },

  delete(req, res, next){
    const messageId = req.params.id;
    Message.findByIdAndRemove({_id: messageId})
      .then(message => res.status(204).send(message))
      .catch(next);
  },
  findById(req, res, next){
    Message.find({_id:req.params.id}).limit(1)
    .then(message => res.status(200).send(message))
    .catch(next)
  }
};