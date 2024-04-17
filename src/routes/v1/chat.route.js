const express = require('express');
const { postController, commentController, chatController} = require('../../controllers');
const userAuth = require('../../middlewares/userAuth');
const validate = require('../../middlewares/validate');
const { chatValidation } = require('../../validations');

const router = express.Router();

router.get('/getMessage/:senderId', userAuth(),validate(chatValidation.validateGetMessage),chatController.getMessages);
router.post('/updateMessage/:messageId',userAuth(),validate(chatValidation.validateUpdateMessage), chatController.updateUserMessage);
router.post('/deleteMessage/:messageId',userAuth(),validate(chatValidation.validateDeleteMessage), chatController.deleteUserMessage); //this route is accessible for admin users ans normal users as well


module.exports = router;
