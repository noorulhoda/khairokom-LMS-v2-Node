var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
const customerRoutes = require('./CustomerRoutes')

//var db="mongodb+srv://noorulhoda:no3011997@cluster0.z7j3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var db='mongodb+srv://m001-student:m001-mongodb-basics@sandbox.j7bds.mongodb.net/test'
mongoose.connect(db,{useNewUrlParser: true,  useUnifiedTopology: true});


var port=3000;
app.listen(port,function(){
    console.log('listening. . . .'+port);
})

app.use(bodyParser.json());
customerRoutes(app)
//middleWares
app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})

