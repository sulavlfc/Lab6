var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var mongoose = require('mongoose');
var Student = require('./models/students');


var app = express();
mongoose.connect('mongodb://localhost:27017/portal');
app.set('port', process.env.PORT || 3000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.get("/students", function(req,res){
  //res.render("students");
   Student.find({},function(err,students){
    console.log(students)
     res.render("students",{students : students});
   });
});

app.post("/update/:id", function(req,res){
  //res.render("students");
   console.log(req.params.id)
});


app.post("/students", function(req,res){
  // console.log(req.body)
  var student = new Student({
        firstname : req.body.firstName,
        lastname : req.body.lastName,
        email : req.body.email,
        grade : req.body.grade
  });
  student.save(function(err,data){
    if(err)
      console.log(err)
    else
     {
          Student.find({},function(err,students){
            res.render("students",{students : students});
              res.end();
              
            });
     }
  })
  
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

module.exports = app;
