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
    type: Int,
    required: true
},
StudentsMaxAge:
{
    type: Int,
    required: true
},
StudentGender:
{
    type: Char,
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


const Class = mongoose.model('Calss', ClassSchema);
module.exports = Class;