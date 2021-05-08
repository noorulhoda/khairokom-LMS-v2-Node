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


var port=8080;
app.listen(port,function(){
    console.log('listening.....'+port);
})

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://khairokom33.azurewebsites.net,http://localhost:8080/');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});

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

