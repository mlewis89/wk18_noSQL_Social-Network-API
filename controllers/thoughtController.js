const { Thought, User } = require('../models');

module.exports = {

    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                res.status(404).json({ message: 'No thought with this id!' });
              }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            //console.log(req.body);
            const thought = await Thought.create(req.body);
            console.log(thought);
           
            if (!thought) {
                res.status(404).json({ message: 'No thought with this id!' });
              }
              
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id }  },
                {  new: true }
              );
              console.log(user);
              if (!user) {
                res.status(404).json({ message: 'No user with this id!' });
              }
               
        
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try { 
                 const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
          }
    
          res.json(thought);
        } catch (err) { 
            res.status(500).json(err);
        }
    }, 
    async deleteThought(req, res) {
        try {
            const thought =  await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({ message: 'Thought deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addReaction(req, res) {
        try {
            console.log({ reactions: req.body});
            const user = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body} },
                {  new: true }
              );
              console.log(user);
              if (!user) {
                res.status(404).json({ message: 'No thought with this id!' });
              }
               
        
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const thought =  await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: {reactionId : req.params.reactionId} }},
                {  new: true }
              );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json({ message: 'reaction deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}; 