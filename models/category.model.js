var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CategorySchema=new Schema({

Title:
{
    type: String,
    required: true
},
Description:
{
    type: String,
    required: true
},
Image:
{
    type: String,
    required: true
}

})


const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;