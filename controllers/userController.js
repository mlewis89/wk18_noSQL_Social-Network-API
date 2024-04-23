const { User, Thought } = require('../models');

module.exports = {

    async getUsers(req, res) {
        try {
            const users = await User.find().populate('thoughts');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId}).populate('thoughts');
            res.json(user);
        } catch (err) {
            res.status(500).json(err);

        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
        res.json(user);
        } catch (err) {
            res.status(500).json(err);

        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
              );
              if (!user) {
                res.status(404).json({ message: 'No user with this id!' });
              }
        
              res.json(user);

        } catch (err) {
            res.status(500).json(err);

        }
    },
    async deleteUser(req, res) {
        try {
            //console.log(req.params.userId);
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            
            if (!user) {
                res.status(404).json({ message: 'No User with that ID' });
            }

            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and Thoughts deleted!' }); 
        } catch (err) {
            res.status(500).json(err);

        }
    },
    

};