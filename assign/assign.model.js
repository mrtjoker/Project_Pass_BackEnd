mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({ // declare structor model in database
    assignProjectCode: { "type": mongoose.Schema.Types.ObjectId, "ref": "project" },
    assignPMName: String,
    assignEmpName: String, 
    assignFile: [],
    assignScopeStart: Date,
    assignScopeEnd: Date,
    assignMat: [],
    assignProgress: Number,
    assignNote: String, 
    assignEmpType: String,
 });

var Assign = mongoose.model("assign", StoreSchema); // create model in employee collection

module.exports = { // export module for use model in another files
    Assign 
};