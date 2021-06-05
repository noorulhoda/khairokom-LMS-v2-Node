var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var SessionSchema=new Schema({
sessionNumber:
{
    type: String,
    required: true
},

classId:
{
    type:String,
    required:true
},
startTime:
{
    type:Date,
    required:true
},
endTime:
{
    type:Date,
    required:true
}


})

const Session = mongoose.model('Session', SessionSchema);
module.exports = Session;