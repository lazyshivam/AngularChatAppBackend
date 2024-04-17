const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { commentService, chatService } = require('../services');
const CONSTANT = require('../config/constant');
const { MailFunction } = require('../helpers');
const ApiError = require('../utils/ApiError');


const deleteUserMessage = catchAsync(async (req, res) => {
    const messageId=req.params.messageId;
    const result = await chatService.deleteMessageById(messageId);

    res.send(result);
});


const updateUserMessage = catchAsync(async (req, res) => {
    const messageId=req.params.messageId;
    const result = await chatService.updateMessageById(messageId,req.body);

    res.send(result);
});

const getMessages = catchAsync(async (req, res) => {
    const senderId = req.params.senderId;
    
    const userId = req.user.id;
    const result = await chatService.getMessageByUserId(userId,senderId);

    res.send(result);
});



module.exports = {getMessages,deleteUserMessage,updateUserMessage}