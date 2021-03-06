mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({ // declare structor model in database
    assignProjectCode: String,
    assignProject_id: String,
    assignPMName: String,
    assignEmpName: String, 
    assignFile: [],
    assignScopeStart: Date,
    assignScopeEnd: Date,
    assignMat: [],
    assignFileRecive: [],
    assignProgress: Number,
    assignNote: String, 
    assignEmpType: String,
 });

var Assign = mongoose.model("assign", StoreSchema); // create model in employee collection

module.exports = { // export module for use model in another files
    Assign 
};