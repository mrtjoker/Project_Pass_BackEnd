const express = require('express');
const router = express.Router();
const controller = require('./pm.controller')

router.get('/pm',controller.index); // call function index in controller
router.post('/pm',controller.add); // call function add in controller  
router.put( "/pm/:id", controller.update );
router.delete( "/pm/:id", controller.destroy );

module.exports = router // export module for use router in another files
 