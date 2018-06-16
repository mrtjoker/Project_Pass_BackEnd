const Pm = require("./pm.model").Pm;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return   Pm.find(); // find and return value to controller
} 
service.insert = (value) => {
    data = new Pm({
        pmName: value.pmName,
        pmPhone: value.pmPhone,
        pmAddress: value.pmAddress
    })
    return data.save(); // insert data in database 
}
service.update = ( data, id ) => {
    return Pm.findByIdAndUpdate( id, data, { "new": true } ); // update data at degree collection
};

service.delete = ( id ) => {
    return Pm.findByIdAndRemove( id ); // delete data at degree collection
};

module.exports = service // export module for use service in another files