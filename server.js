//include external libraries
const express = require('express');
//include database difintions
const db = require('./config/connection');
//include server routes
const routes = require('./routes');
//get current working directory
const cwd = process.cwd();
//configure port
const PORT = process.env.PORT || 3001;
//create intance of express
const app = express();
//manipulate current working director for log output
const activity = cwd.includes('wk18_noSQL_Social-Network-API')
  ? cwd.split('wk18_')[1]
  : cwd;
//middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//start server 
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});