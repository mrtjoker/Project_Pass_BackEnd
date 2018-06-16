
var multer = require('multer');
var path = require('path');
var express = require('express')
var DEST = "uploadfile";

var controllers = (params) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, DEST)
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  var upload = multer({ storage: storage }).single('file')
  var app = params.app;
  app.use('/file', express.static(DEST))
  
  app.post('/uploadfile', function (req, res) {
    upload(req, res, function (err) {
      if (err) {
        res.status(403).json({ status: 'false' });
      } else {
        console.log(file.originalname)
        res.json({  
          data:`${req.protocol}://${req.get('host')}/file/${req.file.filename}`,
          fileName: file.originalname
        });
      }
    })
  });

};
module.exports = controllers;


