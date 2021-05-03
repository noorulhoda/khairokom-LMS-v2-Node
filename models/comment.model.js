var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CommentSchema=new Schema({

content:
{
    type: String,
    required: true
},
courseID:
{
    type: String,
    required: true
},
userID:
{
    type: String,
    required: true
}

})


const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;