

# Bootcamp Challenge Week Eighteen - NoSQL: Social Network API
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Description

The purpose of this application is to test my knowledge of the mongoose npm module to create a noSQL database to provide a functioning backend API interface for a social media app.

This application makes use of MongoDB and the mongoose library.

In this project i learnt how to create models and interface with a Mongo Database and create the associated routes

## Table of Contents
    
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Testing](#testing)
- [Usage](#usage)
- [Screenshots/Video](<#screenshots--video-of-completed-challenge>)
- [License](#license)
- [Credits](#credits)
- [Questions / How to Contribute](#questions--how-to-contribute)

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

Clone the repo to a local folder and open a MYSQL instance within the 'root' foler and run the following command.
    SOURCE db/schema.sql;

exit mysql.

then from the terminal inside the 'Develop' directory, run the following command to install the necessary dependancies.
       
    npm i

Seed the database with the sample code.
       
    npm run seed

## Testing

No self tests exist for this application

## Usage
    
Open the terminal in the 'root' Folder and enter the following command.

    npm run start

Then use insomnia to communicate with the API interface. 


## GitHub repository
https://github.com/mlewis89/wk18_noSQL_Social-Network-API


## Screenshots / Video of Completed Challenge
[Watch a Video of the completed application](https://watch.screencastify.com/v/yXHWJ14xJq2urfkw0Tvx)
[video](./assets/wk18_NoSQL_Social%20network%20API_Example.mp4)

## License
This project is licensed under the MIT.
    
## Questions / How to Contribute
    
If you have any questions about the repo, open an issue. You can veiw my other work on git hub [mlewis89](https://github.com/mlewis89/)

## Credits

Monash University Full Stack Coding bootcamp


---
