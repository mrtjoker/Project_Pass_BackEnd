const Employee = require("./employee.model").Employee;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Employee.find(); // find and return value to controller
}
service.insert = (value) => {
    data = new Employee({
        employeeName: value.employeeName,
        employeePhone: value.employeePhone,
        employeeAddress: value.employeeAddress,
        employeeType: value.employeeType
    })
    return data.save(); // insert data in database 
}
service.update = ( data, id ) => {
    return Employee.findByIdAndUpdate( id, data, { "new": true } ); // update data at degree collection
};

service.delete = ( id ) => {
    return Employee.findByIdAndRemove( id ); // delete data at degree collection
};
module.exports = service // export module for use service in another files