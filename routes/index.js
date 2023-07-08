// Require Express and Router
const express = require('express');
const router = express.Router();

// Require Controller to use
const csvController = require('../controllers/csvController');

router.get('/',  csvController.index);
router.get('/view-data', csvController.showData);
router.post('/csv-upload', csvController.csvUpload);
// Exporting the Modules
module.exports = router;