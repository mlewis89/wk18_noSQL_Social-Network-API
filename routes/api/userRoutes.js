const router = require('express').Router();
const {getUsers, 
    getOneUser, 
    createUser, 
    updateUser, 
    deleteUser, 
    addFriend,
    deleteFriend,
  } = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:courseId
router
  .route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

  router
  .route('/:userId/friends')
  .post(addFriend);

  router
  .route('/:userId/friends/:friendId')
  .delete(deleteFriend);


  

module.exports = router;