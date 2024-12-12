const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request.js');

/*************** Request  ***************/
router.get('/requests', requestController.getAllRequests);
router.get('/request/:id', requestController.getRequestById);

module.exports = router;