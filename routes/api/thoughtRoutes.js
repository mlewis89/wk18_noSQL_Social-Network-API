const router = require('express').Router();
const {getThoughts,
getOneThought,
createThought,
updateThought,
deleteThought,
addReaction,
deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

  // /api/thought/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.get(addReaction)
.delete(deleteReaction);

module.exports = router;