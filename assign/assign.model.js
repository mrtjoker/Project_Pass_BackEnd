mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({ // declare structor model in database
    assignEmpName: String, 
    assignFile: [], //obj
    assignScopeStart: Date,
    assignScopeEnd: Date,
    assignMat: [], //obj
    assignNote: String, 
    assignType: String,
 });

var Assign = mongoose.model("assign", StoreSchema); // create model in employee collection

module.exports = { // export module for use model in another files
    Assign 
};