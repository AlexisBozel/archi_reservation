const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.js');

/*************** Notification  ***************/
router.get('/notifications/:id', notificationController.getAllNotifications);
router.get('/notifications/unread/:id', notificationController.getAllUnReadNotifications);
router.get('/notifications/read/:id', notificationController.getAllReadNotifications);
router.post('/notification', notificationController.addNotification);
router.put('/notifications/:id', notificationController.readNotificationById);
router.delete('/notifications/:id',notificationController.deleteNotificationById);

module.exports = router;