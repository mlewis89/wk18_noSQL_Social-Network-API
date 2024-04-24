//include external router libray
const router = require('express').Router();
//include user control functions
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

// /api/users/:userId
router
  .route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

  // /api/users/:userId/friends
  router
  .route('/:userId/friends')
  .post(addFriend);

  // /api/users/:userId/friends/:friendsId
  router
  .route('/:userId/friends/:friendId')
  .delete(deleteFriend);


  
//export for later use
module.exports = router;