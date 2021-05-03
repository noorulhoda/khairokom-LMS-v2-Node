var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ClassSchema=new Schema({

Number:
{
    type: String,
    required: true
},
StudentsMinAge:
{
    type: Number,
    required: true
},
StudentsMaxAge:
{
    type: Number,
    required: true
},
StudentGender:
{
    type: String,
    required: true
},
ClassLink:
{
    type: String,
    required: true
},
ClassLinkPassword:
{
    type: String,
    required: true
},
StartTime:
{
    type: Date,
    required: true
},
EndTime:
{
    type: Date,
    required: true
}
})


const Class = mongoose.model('Class', ClassSchema);
module.exports = Class;