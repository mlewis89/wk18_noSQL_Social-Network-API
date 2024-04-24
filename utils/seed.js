//include connection defintion
const connection = require('../config/connection');
//include db models
const { User, Thought } = require('../models');
//include data functions to populate the database
const { getRandomUsers, getRandomThoughts } = require('./data');
//check for error
connection.on('error', (err) => err);
//run function to seed database with sample data
connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }
//get aray of sample users
  const users = getRandomUsers(5);
  //get array of sample thoughts
  const thoughts = getRandomThoughts(20,users);
//create thought elements in database
await Thought.collection.insertMany(thoughts);


  // loop through the saved users, for each user we need to populate the thought array
for(let i = 0; i< users.length;  i++)
{
  console.log(users[i].username);
  const usrthoughts = await Thought.find({username: users[i].username});
  users[i].thoughts = usrthoughts.map((thought)=>thought._id.toString());
  console.log(users[i].thoughts)

}
//create user elements in database
await User.collection.insertMany(users);

//log to console indicating success.
console.table(users);  
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
