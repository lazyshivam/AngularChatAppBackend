const Joi = require('joi');
const { objectId } = require('./custom.validation'); // Import objectId validation

// const validateCreateComment = {
//   body: Joi.object().keys({
//     content: Joi.string().trim().required().min(1).max(255).messages({
//       'any.required': 'Comment content is required.',
//       'string.empty': 'Comment content cannot be empty.',
//       'string.min': 'Comment content must be at least {#limit} characters long.',
//       'string.max': 'Comment content cannot be longer than {#limit} characters.',
//     }),

    
//   }),

//   params: Joi.object().keys({
//     postId: Joi.string().required().trim().custom(objectId),
//   })
// };

const validateUpdateMessage = {
  body: Joi.object().keys({
    content: Joi.string().trim().required().min(1).max(255).messages({
      'any.required': 'Message content is required.',
      'string.empty': 'Message content cannot be empty.',
      'string.min': 'Message content must be at least {#limit} characters long.',
      'string.max': 'Message content cannot be longer than {#limit} characters.',
    }),

    
  }),

  params: Joi.object().keys({
    messageId: Joi.string().required().trim().custom(objectId),
  })
};

const validateDeleteMessage = {
  params: Joi.object().keys({
    messageId: Joi.string().required().trim().custom(objectId),
  })
}

const validateGetMessage = {
  params: Joi.object().keys({
    senderId: Joi.string().required().trim().custom(objectId),
  })
}
module.exports = {
//   validateCreateMessage,
  validateDeleteMessage,
  validateUpdateMessage,
  validateGetMessage
};
