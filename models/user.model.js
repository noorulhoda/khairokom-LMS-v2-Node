var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
userName:
{
    type: String,
    required: true,
   // unique : true
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
    required: true,
    // unique : true
}
,
img:
{
    type: String,
    required: true   
}
,birthDate:
{
    type: Date,
    required: true   
},
country:
{
  type: String,
  required: true  
},
phone:{
  type: String,
    required: true  
}
,
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
    }],
    suitableTimes:[{
      type:Date,
      required:true
    }]
    ,
    verifiedTeacher:{
      type:Boolean,
      requred:true
      
    }

});

const user = mongoose.model('users', userSchema);
module.exports = user;