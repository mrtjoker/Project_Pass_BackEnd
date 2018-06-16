const Sale = require("./sale.model").Sale;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return   Sale.find(); // find and return value to controller
} 
service.insert = (value) => {
    data = new Sale({
        saleName: value.saleName,
        salePhone: value.salePhone,
        saleAddress: value.saleAddress,
    })
    return data.save(); // insert data in database 
}
service.update = ( data, id ) => {
    return Sale.findByIdAndUpdate( id, data, { "new": true } ); // update data at degree collection
};

service.delete = ( id ) => {
    return Sale.findByIdAndRemove( id ); // delete data at degree collection
};


module.exports = service // export module for use service in another files