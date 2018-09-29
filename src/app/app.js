// var express = require('express');
// //var cors = require('cors');
// var app = express();
// //app.use(cors());
//
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
//
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
//
// app.use(bodyParser.json());
//
// Shirt = require('./models/shirt')
//
//
//
// mongoose.connect('mongodb://localhost/bookstore',{ useNewUrlParser: true });
// var db = mongoose.connection
//
// //handling get Request
// app.get('/',function(req,res){
//   res.send("please use /api/books or /api/genres");
// });
//
//
// app.get('/api/shirt',function(req,res){
//     res.send("enter the uri funciton");
//   var id= req.params._id
//   Shirt.getShirt(function(err,shirt){
//     res.send("inside func");
//     if(err){
//       throw err;
//     }else{
//       res.json(shirt);
//     }
//   });
// });
//
//
// app.listen(4200);
// console.log("started the app");
