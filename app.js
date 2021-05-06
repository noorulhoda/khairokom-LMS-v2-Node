var express=require('express');
const cors = require('cors');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
const customerRoutes = require('./routes/CustomerRoutes')
const userRoutes=require('./routes/user.route')
const categoryRoutes=require('./routes/category.route')
const classRoutes=require('./routes/class.route')
const courseRoutes=require('./routes/course.route')
const commentRoutes=require('./routes/comment.route')
const authRoute = require('./routes/auth')






var db='mongodb+srv://khairokom:khairokom@cluster0.jo718.mongodb.net/khairokom'
mongoose.connect(db,{useNewUrlParser: true,  useUnifiedTopology: true});


var port=8050;
app.listen(port,function(){
    console.log('listening.....'+port);
})

app.use(cors());

app.use(bodyParser.json());
app.use('', authRoute)
customerRoutes(app)
userRoutes(app)
categoryRoutes(app)
classRoutes(app)
courseRoutes(app)
commentRoutes(app)
//middleWares
app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})

