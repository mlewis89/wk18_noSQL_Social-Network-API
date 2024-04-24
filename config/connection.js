//include mongoose library
const { connect, connection } = require('mongoose');
//define connection to mongo db     
const connectionString = 'mongodb://127.0.0.1:27017/socialNetworkDB';
//create connection     
connect(connectionString);
//export for later use
module.exports = connection;