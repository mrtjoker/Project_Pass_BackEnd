const express = require('express');
const router = express.Router();
const controller = require('./assign.controller')

router.get('/assign',controller.index); // call function index in controller
router.post('/assign',controller.add); // call function add in controller  
router.put( "/assign/:id", controller.update );
router.delete( "/assign/:id", controller.destroy );

module.exports = router // export module for use router in another files
 