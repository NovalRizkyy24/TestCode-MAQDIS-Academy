const express = require('express');
const router = express.Router();
const apiController = require('../controllers/controller.js');

router.get('/hello', apiController.getHelloMessage);
router.get('/setoran', apiController.getSetoranData);

router.post('/data', apiController.createData);
router.post('/hapus-data', apiController.deleteData);

module.exports = router;