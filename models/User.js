const { Schema, Types, model } = require('mongoose');

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
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
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
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per user
UserSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  });

const User = model('user', UserSchema);

module.exports = User;
