# Would you rather Project

This projects implements the Would You Rather game, where the people have to answer questions with two options, the app
enables de the user to add new questions and answers to that questions.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── Components # Contain all the components that renders the UI
    │   ├── App.js  #Main container App, includes routes for react router dom
    │   ├── NavBarF.js #Render main navbar container component
    │   │     ├── NavBar.js #Render navbar menus of navbar
    │   │     ├── AuthedUser.js #Render Authed User component and logout button
    │   │
    │   ├── LoginContainer.js   #Contain the main layout for login component
    │   │    ├── Login.js #Login component itself
    │   ├── MainContainer.js  #Main page application for authed users
    │   │    ├── Home.js #Container component for home page
    │   │     ├── Polls #Render the Answered and Unswared Question Polls
    │   │         ├── CardPoll #Render the question card itself
    │   ├── CardAddNewQuestion.js  #Form to Add new Questionto poll
    │   ├──AnswerQuestion.js  #Container component to answer a question
    │   │   ├──AnswerQuestionCard.js  #Form to answer a question
    │   ├── ViewPollQuestions.js # View the details poll questions
    │   ├── LeaderBoard.js # Main container for leaderboard component.
    │   │   ├── LeaderBoardCard.js # Render the card with user's score.
    ├──  _DATA_.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
