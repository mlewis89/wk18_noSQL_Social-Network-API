

# Bootcamp Challenge Week Fourteen - Object-Model-View-Controller (MVC): Tech Blog
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Description

The purpose of this application is to test my knowledge of the Sequelise npm module to create a MYSQL database to provide a functioning model, view controler for a tech blog.

This application makes use of handlebars and a restful api to serve up a full stack web application.

In this project i learnt alot about how to create a backend application that can render a functioning site.

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
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
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
https://github.com/mlewis89/wk14_MVC_Tech-blog

## Heroku Hosting
https://murmuring-wildwood-67063-687b09e4379f.herokuapp.com/


## Screenshots / Video of Completed Challenge
[Screenshot of completed application](./assets/Capture1.PNG)
[Screenshot of completed application](./assets/Capture2.PNG)
[Screenshot of completed application](./assets/Capture3.PNG)
[Screenshot of completed application](./assets/Capture4.PNG)
[Screenshot of completed application](./assets/Capture5.PNG)

## License
This project is licensed under the MIT.
    
## Questions / How to Contribute
    
If you have any questions about the repo, open an issue. You can veiw my other work on git hub [mlewis89](https://github.com/mlewis89/)

## Credits

Monash University Full Stack Coding bootcamp


---
