var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CourseSchema=new Schema({
tittle:
{
    type: String,
    required: true
},
description:
{
    type: String,
    required: true
},
image:
{
    type: String,
    required:true
},
categoryID:
{
    type:String,
    required:true
},

  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  ]


})

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;