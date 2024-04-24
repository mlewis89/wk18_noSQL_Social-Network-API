//incluse express library
const router = require('express').Router();
//include Route files
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
//create link to route files
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
//export for later use
module.exports = router;