var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

const userRoutes=require('./routes/user.route')
const categoryRoutes=require('./routes/category.route')
const classRoutes=require('./routes/class.route')
const courseRoutes=require('./routes/course.route')
const commentRoutes=require('./routes/comment.route')
const roleRoutes=require('./routes/role.route')
const sessionRoutes=require('./routes/session.route')
const authRoute = require('./routes/auth')
const countryRoute=require('./routes/country.route');
const feedbackRoute = require('./routes/feedback.route');
const notificationRoute = require('./routes/notification.route');
const messageRoute = require('./routes/message.route');




var db='mongodb+srv://khairokom:khairokom@cluster0.jo718.mongodb.net/khairokom'
mongoose.connect(db,{useNewUrlParser: true,  useUnifiedTopology: true});


var port=8080;
app.listen(process.env.PORT|| port,function(){
    console.log('listening.....'+port);
})


//middleWares
app.use((req, res, next) => {
  const allowedOrigins = ['http://127.0.0.1:8080', 'https://khairokom2.azurewebsites.net','http://localhost:8080','http://localhost:2146','http://localhost:4200'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});



app.use(bodyParser.json());
app.use('', authRoute)
app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})

app.get('/',(req, res, next)=>{
 res.status(200).send("Khairokom_API")
 .catch(next)
})
userRoutes(app)
categoryRoutes(app)
classRoutes(app)
courseRoutes(app)
commentRoutes(app)
sessionRoutes(app)
roleRoutes(app)
countryRoute(app)
notificationRoute(app)
feedbackRoute(app)
messageRoute(app)


