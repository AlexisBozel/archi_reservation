const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.js');

/*************** Notification  ***************/
router.get('/:id', notificationController.getAllNotifications);
router.get('/getAllUnReadNotifications/:id', notificationController.getAllUnReadNotifications);
router.get('/getAllReadNotifications/:id', notificationController.getAllReadNotifications);
router.post('/addNotification', notificationController.addNotification);
router.put('/readNotificationById/:id', notificationController.readNotificationById);
router.delete('/deleteNotificationById/:id',notificationController.deleteNotificationById);

module.exports = router;