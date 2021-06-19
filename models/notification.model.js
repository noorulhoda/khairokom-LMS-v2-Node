var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var NotificationSchema=new Schema({
message:
{
    type: String,
    required: true
},
notifiedUserId:
{
    type: String,
    required: true
},
courseId:
{
    type: String,
},
teacherId:
{
    type: String,
    
},
studentId:
{
    type: String,
    
}

,isRead:
{
    type: Boolean,
    
}
,
isFeedbackFrom:{
    type:String
}
,classId:{
      type:String
    }
})

const Notification = mongoose.model('notifications', NotificationSchema);
module.exports = Notification;