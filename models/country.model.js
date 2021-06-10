var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CountrySchema=new Schema({

code:
{
    type: String,
    required: true
},
name:
{
    type: String,
    required: true
},
dialCode:
{
    type: String,
    required: true
}

})


const Country = mongoose.model('countries', CountrySchema);
module.exports = Country;