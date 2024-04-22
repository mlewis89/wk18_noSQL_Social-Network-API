const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //validate email*************************************************************************************
    },
    thoughts : [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
      friends : [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model('user', UserSchema);

module.exports = User;
