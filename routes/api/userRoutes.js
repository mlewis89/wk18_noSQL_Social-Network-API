const router = require('express').Router();
const {getUsers, 
    getOneUser, 
    createUser, 
    updateUser, 
    deleteUser, 
    clearUserThoughts,
  } = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:courseId
router
  .route('/:courseId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;