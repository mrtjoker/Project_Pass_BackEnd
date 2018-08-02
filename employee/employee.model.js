mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({ // declare structor model in database   
    employeeName: String,
    employeePhone: String,
    employeeAddress: String,
    employeeSex: String,
    employeeAge: Number,
    employeeEmail: String,
    employeeType: String
 });

var Employee = mongoose.model("employee", EmployeeSchema); // create model in employee collection

module.exports = { // export module for use model in another files
    Employee 
};