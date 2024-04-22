module.exports = {

    async getUsers(req, res) {
        try {
            res.json();
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneUser(req, res) {
        try {
            res.json();
        } catch (err) {
            res.status(500).json(err);

        }
    },
    async createUser(req, res) {
        try {
            res.json();
        } catch (err) {
            res.status(500).json(err);

        }
    },
    async updateUser(req, res) {
        try {
            res.json();
        } catch (err) {
            res.status(500).json(err);

        }
    },
    async deleteUser(req, res) {
        try {
            res.json();
        } catch (err) {
            res.status(500).json(err);

        }
    },
    async clearUserThoughts(req, res) {
        try {
            res.json();
        } catch (err) {
            res.status(500).json(err);

        }
    },

};