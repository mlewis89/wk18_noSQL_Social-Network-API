const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsers, getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

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

  const users = getRandomUsers(5);
  const thoughts = getRandomThoughts(20,users);

await Thought.collection.insertMany(thoughts);


  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
for(let i = 0; i< users.length;  i++)
{
  console.log(users[i].username);
  const usrthoughts = await Thought.find({username: users[i].username});
  users[i].thoughts = usrthoughts.map((thought)=>thought._id.toString());
  console.log(users[i].thoughts)

}

await User.collection.insertMany(users);

console.table(users);  
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
