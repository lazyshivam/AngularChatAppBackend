const ApiError = require('../utils/ApiError');
const CONSTANT = require("../config/constant");
const {ChatModel } = require('../models');
const UserProfile = require('../models/profile.model');


const getMessageByUserId = async (userId,senderId) => {

    const messages = await ChatModel.find({ receiver: userId,sender:senderId }).populate('sender');
  if (!messages) {
    return { data: {}, code: CONSTANT.BAD_REQUEST, message: CONSTANT.NOT_FOUND_MSG }
  }
  return { data: messages, code: CONSTANT.SUCCESSFUL, message:"Message List" }
};



const updateMessageById = async (messageId, updateData) => {

  const messages = await ChatModel.findByIdAndUpdate({ _id: messageId }, updateData, { new: true });
  if (!messages) {
    return { data: {}, code: CONSTANT.BAD_REQUEST, message: CONSTANT.NOT_FOUND_MSG }
  }
  return { data: messages, code: CONSTANT.SUCCESSFUL, message:"Message updated successfully"}
};


const deleteMessageById = async (messageId) => {

  const message = await ChatModel.findByIdAndDelete({ _id: messageId });
  if (!message) {
    return { data: {}, code: CONSTANT.BAD_REQUEST, message: CONSTANT.NOT_FOUND_MSG }
  }
  

  return { data: message, code: CONSTANT.SUCCESSFUL, message:"Message deleted successfully" }
};

module.exports = {
  getMessageByUserId,
  updateMessageById,
  deleteMessageById,
};
