var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var RoleSchema=new Schema({

type:
{
    type: String,
    required: true
},
users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  ]


})


const Role = mongoose.model('roles', RoleSchema);
module.exports = Role;