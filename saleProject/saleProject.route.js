const express = require('express');
const router = express.Router();
const controller = require('./saleProject.controller')

router.get('/saleProject',controller.index); // call function index in controller
router.post('/saleProject',controller.add); // call function add in controller  

module.exports = router // export module for use router in another files
 