var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var NotificationSchema=new Schema({
message:
{
    type: String,
    required: true
}
})

const Notification = mongoose.model('Notification', NotificationSchema);
module.exports = Notification;