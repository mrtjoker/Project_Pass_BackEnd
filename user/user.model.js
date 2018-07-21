mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({ // declare structor model in database   
    username: String,
    password: String,
    idEmp: String,
    type: String,
 });

var User = mongoose.model("user", UserSchema); // create model in user collection

module.exports = { // export module for use model in another files
    User 
};