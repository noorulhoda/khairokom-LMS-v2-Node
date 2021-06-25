var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var MessageSchema=new Schema({
message:
{
    type: String,
    required: true
},
receiverId:
{
    type: String,
    required: true
},
senderId:
{
    type: String,
},
email:
{
    type: String,
    
}

,isRead:
{
    type: Boolean,
    
}
})

const Message = mongoose.model('messages', MessageSchema);
module.exports = Message;