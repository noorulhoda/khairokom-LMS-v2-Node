var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var FeedbackSchema=new Schema({
message:
{
    type: String,
  
},
starsNumber:{
    type:Number,
    reequired:true
},
setterId:
{
    type: String,
    required: true
},
getterId:
{
    type: String,
},
feedbackedUserType:{
    type:String,
    required:true
}
,
classId:{
    type:String
    ,required:true
}
})

const Feedback = mongoose.model('feedbacks', FeedbackSchema);
module.exports = Feedback;