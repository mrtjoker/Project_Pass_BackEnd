mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({ // declare structor model in database
    materialId: String, 
    materialName: String,
    materialNum: Number,
    materialUnit: String,
    materialPrice: String
 });

var Store = mongoose.model("store", StoreSchema); // create model in employee collection

module.exports = { // export module for use model in another files
    Store 
};