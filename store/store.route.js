const express = require('express');
const router = express.Router();
const controller = require('./store.controller')

router.get('/store',controller.index); // call function index in controller
router.post('/store',controller.add); // call function add in controller  
router.put( "/store/:id", controller.update );
router.delete( "/store/:id", controller.destroy );

module.exports = router // export module for use router in another files
 