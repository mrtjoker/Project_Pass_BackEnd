const express = require('express');
const router = express.Router();
const controller = require('./sale.controller')

router.get('/sale',controller.index); // call function index in controller
router.post('/sale',controller.add); // call function add in controller  
router.put( "/sale/:id", controller.update );
router.delete( "/sale/:id", controller.destroy );

module.exports = router // export module for use router in another files
 