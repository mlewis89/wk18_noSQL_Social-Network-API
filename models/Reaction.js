//include mongoose data types
const { Schema, Types } = require('mongoose');
//define model
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
},
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//export for later use

module.exports = ReactionSchema;
