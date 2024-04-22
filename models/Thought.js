const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions : [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('thought', ThoughtSchema);

module.exports = Thought;
