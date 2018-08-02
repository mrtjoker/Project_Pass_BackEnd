mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleSchema = new Schema({ // declare structor model in database   
    saleName: String,
    salePhone: String,
    saleAddress: String,
    saleSex: String,
    saleAge: Number,
    saleEmail: String,
 });

var Sale = mongoose.model("sale", SaleSchema); // create model in sale collection

module.exports = { // export module for use model in another files
    Sale 
};