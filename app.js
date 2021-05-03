var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
const customerRoutes = require('./routes/CustomerRoutes')
const userRoutes=require('./routes/user.route')
const categoryRoutes=require('./routes/category.route')
const classRoutes=require('./routes/class.route')

var db='mongodb+srv://khairokom:khairokom@cluster0.jo718.mongodb.net/khairokom'
mongoose.connect(db,{useNewUrlParser: true,  useUnifiedTopology: true});


var port=8080;
app.listen(port,function(){
    console.log('listening  ... ..'+port);
})

app.use(bodyParser.json());
customerRoutes(app)
userRoutes(app)
categoryRoutes(app)
classRoutes(app)
//middleWares
app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})

