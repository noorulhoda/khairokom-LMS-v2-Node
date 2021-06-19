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
StartDate:
{
    type: Date,
    required: true
},
EndDate:
{
    type: Date,
    required: true
},
CourseId:
{
    type:String,
    required:true
},
TeacherId:
{
    type:String,
    required:true
},
Students: [
    {
      type: String,
      ref: "users"
    }
  ]
  ,
})


const Class = mongoose.model('Class', ClassSchema);
module.exports = Class;