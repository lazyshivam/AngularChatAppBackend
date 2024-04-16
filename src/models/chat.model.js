const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    // You can add more fields like timestamps, attachments, etc.
  }, { timestamps: true });
  

const Chat = mongoose.model('Chat', MessageSchema);
  
module.exports = Chat;