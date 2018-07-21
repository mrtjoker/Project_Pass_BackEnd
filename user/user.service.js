const User = require("./user.model").User;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return   User.find(); // find and return value to controller
} 
service.insert = (value) => {
    data = new User({
        username: value.username,
        password: value.password,
        idEmp: value.idEmp,
        type: value.type
    })
    return data.save(); // insert data in database 
}
service.update = ( data, id ) => {
    return User.findByIdAndUpdate( id, data, { "new": true } ); // update data at degree collection
};

service.delete = ( id ) => {
    return User.findByIdAndRemove( id ); // delete data at degree collection
};


module.exports = service // export module for use service in another files