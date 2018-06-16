const SaleProject = require("./saleProject.model").SaleProject;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return   SaleProject.find(); // find and return value to controller
} 
service.insert = (value) => {
    data = new SaleProject({
        cus_First_Name: value.cus_First_Name,
        cus_Last_Name: value.cus_Last_Name,
        phone: value.phone,
        address: value.address
    })
    return data.save(); // insert data in database 
}

module.exports = service // export module for use service in another files