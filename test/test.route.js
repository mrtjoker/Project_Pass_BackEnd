const express = require('express');
const router = express.Router();
const controller = require('./test.controller')

router.get('/test',controller.index); // call function index in controller
router.post('/test',controller.add); // call function add in controller  

module.exports = router // export module for use router in another files
 