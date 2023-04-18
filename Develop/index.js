// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require('inquirer');
const readMe = require('../');

const content = 'hello';

// TODO: Create an array of questions for user input
const questions = [
    "What was your motivation?",
    "Why did you build this project?",
    "What problem does it solve?",
    "What did you learn?",
    "What makes your project stand out?"
];

// TODO: Create a function to write README file
fs.writeFile(readMe, content, err => {
    if (err) {
        console.error(err);
    } else {'content written!'}
});;

function writeToFile(readMe, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
