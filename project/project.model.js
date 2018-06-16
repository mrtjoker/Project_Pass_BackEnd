mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({ // declare structor model in database   
    projectCode: String,
    projectType: String,
    projectProgress: Number,
    projectFile: [],
    projectStart: Date,
    projectEnd: Date,
    StatusProject: String,
    // pm: { "type": mongoose.Schema.Types.ObjectId, "ref": "pm" },
    // customer: { "type": mongoose.Schema.Types.ObjectId, "ref": "customer" }
    pm: String,
    customer: String
 });

var Project = mongoose.model("project", ProjectSchema); // create model in project collection

module.exports = { // export module for use model in another files
    Project 
};