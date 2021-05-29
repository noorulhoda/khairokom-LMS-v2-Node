var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
userName:
{
    type: String,
    required: true
},
password:
{
    type: String,
    required: true
},
firstName:
{
    type: String,
    required: true
},
lastName:
{
    type: String,
    required: true
},

email:
{
    type: String,
    required: true
}
,
img:
{
    type: String,
    required: true   
}
,age:
{
    type: Number,
    required: true   
},
gender:
{
    type: String,
    required: true   
}
,
roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roles"
    }
  ],

joinedClasses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classes"
    }
  ], 
  teachedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses"
    }]

});


const user = mongoose.model('users', userSchema);
module.exports = user;