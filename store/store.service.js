const Store = require("./store.model").Store;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return Store.find(); // find and return value to controller
}
service.insert = (value) => {
    data = new Store({
        materialId: value.materialId,
        materialName: value.materialName,
        materialNum: value.materialNum,
        materialUnit: value.materialUnit,
        materialPrice: value.materialPrice
    })
    return data.save(); // insert data in database 
}
service.update = ( data, id ) => {
    return Store.findByIdAndUpdate( id, data, { "new": true } ); // update data at degree collection
};

service.delete = ( id ) => {
    return Store.findByIdAndRemove( id ); // delete data at degree collection
};
module.exports = service // export module for use service in another files