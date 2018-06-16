mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({ // declare structor model in database   
    Code: Number,
    Name: String,
    Phone: Number
 });

var Test = mongoose.model("test", TestSchema); // create model in test collection

module.exports = { // export module for use model in another files
    Test 
};