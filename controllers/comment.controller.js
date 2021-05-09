const Comment = require('../models/comment.model');

module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Comment.find({}).limit(limit)
    .then(comments => res.status(200).send(comments))
    .catch(next)
  },

  create(req, res, next){
    const commentProps = req.body;
    console.log(commentProps);
    Comment.create(commentProps)
      .then(comment =>
        res.status(201).send(comment)) 
      .catch(next) 

  },

 edit(req, res, next){
    const CommentId = req.params.id;
    const commentProps = req.body;
    Comment.findByIdAndUpdate({_id: commentId}, commentProps)
    .then(() => Comment.findById({_id: commentId}))
    .then(comment => res.status(200).send(comment))
    .catch(next);
  },

  delete(req, res, next){
    const commentId = req.params.id;
    Comment.findByIdAndRemove({_id: commentId})
      .then(comment => res.status(204).send(comment))
      .catch(next);
  },
  findById(req, res, next){
    Comment.find({id:req.params.id}).limit(1)
    .then(comment => res.status(200).send(comment))
    .catch(next)
  }
};