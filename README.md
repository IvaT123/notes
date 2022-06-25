# Notes-App
Simple application used to write notes  (e.g. grocery list) and save them to a local storage. Each note can be modified and/or deleted.
## Table of contents
* [Technologies](#technologies)
* [Build Process](#build-process)
* [Setup](#setup)

## Technologies
This project was built with React, JavaScript, HTML and Sass extension. I have also used react-markdown library for displaying saved notes and PropTypes mechanism to ensure that components pass the right type of props.

## Build Process
Step by step process:
* First, I created an application by running a command 'npx create-react-app notes' in terminal and once it has finished loading, I cleaned up unnecessary files from src folder and was left with App.js and index.js
* I converted App.js into a class component and in the render method I started adding HTML elements I wanted to display, leaving space for future components to be imported.
* Each component and its functionalities were created in synchronous order, meaning I started from the AddNote component being the first thing user sees when the application runs, followed by Notes, ViewMode and EditMode.
* Simultaneously with creating components I was writing css code for their elements due to easier visualisation of the building progress, and later converted it to a sass file, mostly because of mixins and nesting functionalities. This being a simple application made me decide to keep all styles in the same file. The same logic is behind having all states and functions in App component.
* Once everything was set up and working I created functionalities to save and retrieve data from the local storage.
* Importing PropTypes was saved for the end of the building procces only because it was my first time using it.
* Approximate time needed to finish this project was ten days. Even though everything works and runs as expected, I am aware that many thing could have been done better in the sense of structure and organisation of the application.

## Setup
Clone down this repository. You will need npm installed globally on your machine. Run 'npm start' command to start the server.
