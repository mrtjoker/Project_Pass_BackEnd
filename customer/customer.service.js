const Customer = require("./customer.model").Customer;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return   Customer.find(); // find and return value to controller
} 
service.insert = (value) => {
    data = new Customer({
        customerName: value.customerName,
        customerPhone: value.customerPhone,
        customerAddress: value.customerAddress
    })
    return data.save(); // insert data in database 
}
service.update = ( data, id ) => {
    return Customer.findByIdAndUpdate( id, data, { "new": true } ); // update data at degree collection
};

service.delete = ( id ) => {
    return Customer.findByIdAndRemove( id ); // delete data at degree collection
};

module.exports = service // export module for use service in another files