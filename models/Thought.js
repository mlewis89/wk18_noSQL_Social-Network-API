//include mongoose datatypes
const { Schema, Types, model } = require('mongoose');
//include schema for reactions
const reactionSchema = require('./Reaction');
//define thought model
const ThoughtSchema = new Schema(
  {
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
//create model 
const Thought = model('thought', ThoughtSchema);
//export for later use
module.exports = Thought;
