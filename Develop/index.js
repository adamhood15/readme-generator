// TODO: Include packages needed for this application
const writeFile = require('fs').promises;
const { prompt } = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        message: "What is your GitHub username?",
        name: 'userName'
    },
    {
        type: 'input', 
        message: "What is your email address?",
        name: 'email'
    },
    {
        type: 'input', 
        message: "What is your projects name?",
        name: 'title'
    },
    {
        type: 'input', 
        message: "Please write a short description of your project.",
        name: 'description'
    },
    {
        type: 'input', 
        message: "What kind of license should your project have?",
        name: 'license'
    },
    {
        type: 'input', 
        message: "What command should be run to install dependencies?",
        name: 'dependencies'
    },
    {
        type: 'input', 
        message: "What command should be run to run tests?",
        name: 'tests'
    },
    {
        type: 'input', 
        message: "What does the user need to know about using the repo?",
        name: 'needToKnow'
    },
    {
        type: 'input', 
        message: "What does the user need to know about using the repo?",
        name: 'fyi'
    },
];


async function init() {
    try {
        const answers = await prompt(questions);
        const {userName, email, title, description, license, dependencies, tests, needToKnow, fyi} = answers;

        writeFile('../README.md', markdown, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('README updated!');
                }});
        
    }
    catch (err) {
        console.log(err);
    }
}


// Function call to initialize app
init();
