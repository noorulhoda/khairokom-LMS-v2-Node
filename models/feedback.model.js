var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var FeedbackSchema=new Schema({
message:
{
    type: String,
  
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
feedbackedRole:{
    type:String,
    required:true
}

})

const Feedback = mongoose.model('feedbacks', FeedbackSchema);
module.exports = Feedback;