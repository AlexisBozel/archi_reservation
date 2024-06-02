const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request.js');

/*************** Request  ***************/
router.get('/requests', requestController.getAllRequests);
router.get('/request/:id', requestController.getRequestById);
router.post('/request', requestController.addRequest);
router.put('/request/:id', requestController.updateRequestById);
router.delete('/request/:id',requestController.deleteRequestById);

module.exports = router;