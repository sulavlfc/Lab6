var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    phone: Number,
    grade : Number,
    course : String
    
});


module.exports = mongoose.model("Student", studentSchema);