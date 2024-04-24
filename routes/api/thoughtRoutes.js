
//include external libraries
const router = require('express').Router();
//include route controlers
const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

  // /api/thought/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction);

// /api/thought/:thoughtId/reactions/:reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;