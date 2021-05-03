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
},
role:
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

});

let role={
    'Admin':'Admin',
    'Teacher':'Teacher',
    'Student':'Student'
};
const user = mongoose.model('user', userSchema);
module.exports = user;