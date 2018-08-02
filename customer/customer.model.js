mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({ // declare structor model in database   
    customerName: String,
    customerPhone: String,
    customerAddress: String,
    customerSex: String,
    customerAge: Number,
    customerEmail: String,
 });

var Customer = mongoose.model("customer", CustomerSchema); // create model in customer collection

module.exports = { // export module for use model in another files
    Customer 
};