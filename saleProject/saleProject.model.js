mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleProjectSchema = new Schema({ // declare structor model in database   
    cus_First_Name: String,
    cus_Last_Name: String,
    phone: Number,
    address: String
 });

var SaleProject = mongoose.model("saleProject", SaleProjectSchema); // create model in saleProject collection

module.exports = { // export module for use model in another files
    SaleProject 
};