const express = require('express');
const router = express.Router();
const controller = require('./assign.controller')

router.get('/assign',controller.index); // call function index in controller
router.get('/assign/:id',controller.findIdUser); // call function index in controller
router.get( '/assignId/:id', controller.findAssignId );
router.get( '/assignnId/:id', controller.projectProgress );
router.get( '/assignEmpName/:id', controller.getWork );
router.post('/assign',controller.add); // call function add in controller  
router.put( "/assign/:id", controller.update );
router.put( "/assignn/:id", controller.updateMat );
router.put( "/assignReturn/:id", controller.updateReturnMat );
router.put( "/assignForm/:id", controller.updateMatassignForm );
router.put( "/assignMatUse/:id", controller.updateMatUse );
// router.put( "/assignForm/:id", controller.updateMatassignForm );
router.delete( "/assign/:id", controller.destroy );

module.exports = router // export module for use router in another files
 