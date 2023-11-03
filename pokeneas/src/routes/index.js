const express = require('express');

const router = express.Router();

const pokeneaControllerImport = require('..\..\public\Controllers\PokeneasController.js');
const homeControllerImport = require('..\..\public\Controllers\HomeController.js');

const homeController = homeControllerImport();
const pokeneaController = pokeneaControllerImport();

router.get('/',homeController.index());
router.get('/pokenea',pokeneaController.index());
router.get('/pokenea/show',pokeneaController.show());

module.exports = router;