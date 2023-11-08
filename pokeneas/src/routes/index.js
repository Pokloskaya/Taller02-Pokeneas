const express = require('express');

const router = express.Router();

const PokeneasController = require('../../public/Controllers/PokeneasController.js');
const homeController = require('../../public/Controllers/HomeController.js');

router.get('/',homeController.index);
router.get('/pokenea',PokeneasController.index);
router.get('/pokenea/show',PokeneasController.show);

module.exports = router;