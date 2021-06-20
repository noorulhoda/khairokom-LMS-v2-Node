const Feedback = require('../models/feedback.model');



module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Feedback.find({}).limit(limit)
    .then(feedbacks => res.status(200).send(feedbacks))
    .catch(next)
  },

  create(req, res, next){
    const feedbackProps = req.body;
    Feedback.create(feedbackProps)
      .then(feedback =>
        res.status(201).send(feedback)) 
      .catch(next);
  },

 edit(req, res, next){
    const FeedbackId = req.params.id;
    const feedbackProps = req.body;
    Feedback.findByIdAndUpdate({_id: FeedbackId}, feedbackProps)
    .then(() => Feedback.findById({_id: FeedbackId}))
    .then(feedback => res.status(200).send(feedback))
    .catch(next);
  },

  delete(req, res, next){
    const feedbackId = req.params.id;
    Feedback.findByIdAndRemove({_id: feedbackId})
      .then(feedback => res.status(204).send(feedback))
      .catch(next);
  },
  findById(req, res, next){
    Feedback.find({_id:req.params.id}).limit(1)
    .then(feedback => res.status(200).send(feedback))
    .catch(next)
  }
};