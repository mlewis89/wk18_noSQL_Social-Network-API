//include mongoose data types
const { Schema, Types, model } = require('mongoose');
//define user model
const UserSchema = new Schema(
  {
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
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,     //validate email
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

// virtual property `friendCount` that gets the amount of friends per user
UserSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  });
//create user model
const User = model('user', UserSchema);
//export model for later use
module.exports = User;
