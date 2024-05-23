const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request.js');

/*************** Request  ***************/
router.get('/', requestController.getAllRequests);
router.get('/getRequestById/:id', requestController.getRequestById);
router.post('/add', requestController.addRequest);
router.put('/updateRequestById/:id', requestController.updateRequestById);
router.delete('/deleteRequestById/:id',requestController.deleteRequestById);

module.exports = router;