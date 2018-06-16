const express = require('express');
const router = express.Router();
const controller = require('./project.controller')

router.get('/project',controller.index); // call function index in controller
router.post('/project',controller.add); // call function add in controller  
router.put( "/project/:id", controller.update );
router.delete( "/project/:id", controller.destroy );

module.exports = router // export module for use router in another files
 