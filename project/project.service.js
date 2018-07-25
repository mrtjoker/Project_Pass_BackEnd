const Project = require("./project.model").Project;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Project.find(); // find and return value to controller
}

service.groupService = () => {
    return Project.find(); // find and return value to controller
}

service.groupProject = (id) => {
    return Project.find({ _id: id });
}

service.projectFromPM = (id) => {
    return Project.find({ pm: id });
}
service.projectFromSale = (id) => {
    return Project.find({ sale: id });
}

service.insert = (value) => {
    data = new Project({
        projectCode: value.projectCode,
        projectType: value.projectType,
        projectProgress: 0,
        projectFile: value.projectFile,
        projectStart: value.scopeStart,
        projectEnd: value.scopeEnd,
        StatusProject: value.projectCode,
        pm: value.pm,
        customer: value.customer,
        sale: value.sale
    })
    return data.save(); // insert data in database 
}

service.update = (data, id) => {
    return Project.findByIdAndUpdate(id, data, { "new": true }); // update data at degree collection
};

service.delete = (id) => {
    return Project.findByIdAndRemove(id); // delete data at degree collection
};

module.exports = service // export module for use service in another files