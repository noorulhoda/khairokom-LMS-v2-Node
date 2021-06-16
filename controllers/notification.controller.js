const Notification = require('../models/notification.model');

module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Notification.find({}).limit(limit)
    .then(notifications => res.status(200).send(notifications))
    .catch(next)
  },

  create(req, res, next){
    const notificationProps = req.body;
    Notification.create(notificationProps)
      .then(notification =>
        res.status(201).send(notification)) 
      .catch(next);
  },

 edit(req, res, next){
    const NotificationId = req.params.id;
    const notificationProps = req.body;
    Notification.findByIdAndUpdate({_id: NotificationId}, notificationProps)
    .then(() => Notification.findById({_id: NotificationId}))
    .then(notification => res.status(200).send(notification))
    .catch(next);
  },

  delete(req, res, next){
    const notificationId = req.params.id;
    Notification.findByIdAndRemove({_id: notificationId})
      .then(notification => res.status(204).send(notification))
      .catch(next);
  },
  findById(req, res, next){
    Notification.find({_id:req.params.id}).limit(1)
    .then(notification => res.status(200).send(notification))
    .catch(next)
  }
};