const express = require('express');
const router = express.Router();
const controller = require('./project.controller')

router.get('/project',controller.index); // call function index in controller
router.get('/projectGroupProduct',controller.group); // call function index in controller
router.get( '/project/:id', controller.groupId );
router.get( '/projectFromPM/:id', controller.projectFromPM );
router.post('/project',controller.add); // call function add in controller  
router.put( "/project/:id", controller.update );
router.delete( "/project/:id", controller.destroy );

module.exports = router // export module for use router in another files
 