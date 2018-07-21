const express = require('express');
const router = express.Router();
const controller = require('./user.controller')

router.get('/user',controller.index); // call function index in controller
router.post('/user',controller.add); // call function add in controller  
router.put( "/user/:id", controller.update );
router.delete( "/user/:id", controller.destroy );
router.put( "/checkUser", controller.checkUser );
module.exports = router // export module for use router in another files
 