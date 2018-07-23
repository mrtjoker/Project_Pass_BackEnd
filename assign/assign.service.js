const Assign = require("./assign.model").Assign;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Assign.find().populate("project").exec(); // find and return value to controller
}

service.findId = (id) => {
    return Assign.find({ assignProjectCode:id });
}

service.insert = (value) => {
    data = new Assign({
        assignProjectCode: value.assignProjectCode,
        assignProject_id: value.assignProject_id,
        assignPMName: value.assignPMName,
        assignEmpName: value.assignEmpName,
        assignFile: value.assignFile,
        assignScopeStart: value.assignScopeStart,
        assignScopeEnd: value.assignScopeEnd,
        assignMat: value.assignMat,
        assignProgress: value.assignProgress,
        assignNote: value.assignNote,
        assignEmpType: value.assignEmpType
    })
    return data.save(); // insert data in database 
}
service.update = (data, id) => {
    console.log(data)
    console.log(id)
    return Assign.findByIdAndUpdate(id, data); // update data at degree collection
};

service.delete = (id) => {
    return Assign.findByIdAndRemove(id); // delete data at degree collection
};
module.exports = service // export module for use service in another files