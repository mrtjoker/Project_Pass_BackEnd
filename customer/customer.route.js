const express = require('express');
const router = express.Router();
const controller = require('./customer.controller')

router.get('/customer',controller.index); // call function index in controller
router.post('/customer',controller.add); // call function add in controller  
router.put( "/customer/:id", controller.update );
router.delete( "/customer/:id", controller.destroy );

module.exports = router // export module for use router in another files
 