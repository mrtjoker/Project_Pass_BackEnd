mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleSchema = new Schema({ // declare structor model in database   
    saleName: String,
    salePhone: Number,
    saleAddress: String,
 });

var Sale = mongoose.model("sale", SaleSchema); // create model in sale collection

module.exports = { // export module for use model in another files
    Sale 
};