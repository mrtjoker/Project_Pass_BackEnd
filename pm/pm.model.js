mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PmSchema = new Schema({ // declare structor model in database   
    pmName: String,
    pmPhone: Number,
    pmAddress: String
 });

var Pm = mongoose.model("pm", PmSchema); // create model in pm collection

module.exports = { // export module for use model in another files
    Pm 
};