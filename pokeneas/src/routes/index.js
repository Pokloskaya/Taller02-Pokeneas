const express = require('express');

const router = express.Router();

const pokeneaController = require('../../public/Controllers/PokeneasController.js');
const homeController = require('../../public/Controllers/HomeController.js');
 

// const homeController = new homeControllerImport();
// const pokeneaController = new pokeneaControllerImport();

router.get('/',homeController.index);
router.get('/pokenea',pokeneaController.index);
router.get('/pokenea/show',pokeneaController.show);

module.exports = router;