// Packages needed for this application
const {writeFile} = require('fs').promises;
const { prompt } = require('inquirer');
const renderLicenseBadge = require('./utils/generateMarkdown');


// Array of questions for the user to generate a readme.
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
        message: "How does the user install the application?",
        name: 'installation'
    },
    {
        type: 'list', 
        message: "What kind of license should your project have?",
        name: 'license',
        choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Boost',  'Eclipse', 'Mozilla', 'Unlicense', 'None']
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
        message: "How can the user contribute to the project?",
        name: 'openSource'
    },
    {
        type: 'input', 
        message: "Who collaborated with you on this project?",
        name: 'credits'
    },
];

//Function that initializes the application
async function init() {
    try {
        const answers = await prompt(questions);
        renderLicenseBadge(answers);
        await writeFile('../README.md', markdown);
        console.log('ReadMe Generated!');

    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
