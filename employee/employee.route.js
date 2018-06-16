const express = require('express');
const router = express.Router();
const controller = require('./employee.controller')

router.get('/employee',controller.index); // call function index in controller
router.post('/employee',controller.add); // call function add in controller  
router.put( "/employee/:id", controller.update );
router.delete( "/employee/:id", controller.destroy );

module.exports = router // export module for use router in another files
 