mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
var ProjectSchema = new Schema({ // declare structor model in database   
    projectCode: String,
    projectType: String,
    projectProgress: Number,
    projectFile: [],
    projectStart: Date,
    projectEnd: Date,
    StatusProject: String,
    pm: [],
    customer: [],
    sale: []
});

var Project = mongoose.model("project", ProjectSchema); // create model in project collection

module.exports = { // export module for use model in another files
    Project
};