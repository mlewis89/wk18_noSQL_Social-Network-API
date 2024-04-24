const nameList = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abba5',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdriahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan89',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];

  const thoughtsList = [
    'the earth is flat',
    'I cant Find My Phone',
    'Living my best life',
    'here is a cool thought',
    'Tower Defense is a good game',
    'Marvel is better than DC',
    'I want to travel the world',
    'Hello world',
    'this Social Media App is great',
    'the sky is blue',
    'May the Force be with you.',
    "There's no place like home.",
    "Elementary, my dear Watson.",
    'Just keep swimming.',
    'Keep your friends close, but your enemies closer.',
    'Houston, we have a problem.',
    'A martini. Shaken, not stirred.',
    "They may take our lives, but they'll never take our freedom!",
  ];

  const reactionList = [
    'cool thought bro!',
    'are you ok?',
    'love this!',
    'disagree!',
    'we should catch up',
    'Thats awesome',
    'you light up my world',
    'let me help you with that',
    'oh really?',
    'this made my day',
  ];

  const domainList = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'email.com.au',
  ];
  
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];


// Gets a random username
const getRandomUsername = () =>
  `${getRandomArrItem(nameList)}${Math.floor(Math.random() * 999)}`;

  //get random list of users
const getRandomUsers = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        var usr = getRandomUsername();
      results.push({
        username: usr,
        email: `${usr}@${getRandomArrItem(domainList)}`,
        thoughts: [],
        friends: [],
    });
    }
    return results;
  };


  // Function to generate random thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int,userArr) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtsList),
        reactions: [...getRandomReactions(Math.floor(Math.random() * 5),userArr)],
        username: getRandomArrItem(userArr).username,
      });
    }
    return results;
  };
//get an array of random reactions
  const getRandomReactions = (int,userArr) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactionList),
        username: getRandomArrItem(userArr).username, 
        });
    }
    return results;
  };

  // Export the functions for use in seed.js
module.exports = { getRandomUsers, getRandomThoughts, getRandomReactions};