const Assign = require("./assign.model").Assign;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Assign.find(); // find and return value to controller
}
service.insert = (value) => {
    data = new Assign({
        assignProjectCode: mongoose.Types.ObjectId(  value.assignProjectCode ),
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
    return Assign.findByIdAndUpdate(id, data, { "new": true }); // update data at degree collection
};

service.delete = (id) => {
    return Assign.findByIdAndRemove(id); // delete data at degree collection
};
module.exports = service // export module for use service in another files