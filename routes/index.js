//include external router library
const router = require('express').Router();
//include api routes
const apiRoutes = require('./api');
//create rout to /api

router.use('/api', apiRoutes);
//create wildcard for non reqonised routes
router.use((req, res) => res.send('Wrong route!'));

//export for later use
module.exports = router;
