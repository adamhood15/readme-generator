// TODO: Include packages needed for this application
const {writeFile} = require('fs').promises;
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown')
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
        message: "How does the user install the application?",
        name: 'installation'
    },
    {
        type: 'list', 
        message: "What kind of license should your project have?",
        name: 'license',
        choices: ['Apache 2.0', 'GNU General Public v3.0', 'MIT', 'BSD 2-Clause "Simplified"', 'Boost Software 1.0', 
        'Creative Commons Zero v1.0 Universal', 'Eclipse Public 2.0', 'GNU Affero v3.0', 'GNU General Public v2.0', 
        'Mozilla Public 2.0', 'The Unlicense']
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


async function init() {
    try {
        const answers = await prompt(questions);
        const {userName, email, title, description, license, dependencies, tests, needToKnow, installation, openSource, credits} = answers;

        const markdown = 
`# ${title}
# Description
${description}

# Table of Contents
## -[Installation](https://github.com/adamhood15/readme-generator/blob/main/README.md#installation)\n
## -[Usage](https://github.com/adamhood15/readme-generator/blob/main/README.md#usage)\n
## -[License](https://github.com/adamhood15/readme-generator/blob/main/README.md#license)\n
## -[Contributing](https://github.com/adamhood15/readme-generator/blob/main/README.md#contributing)\n
## -[Tests](https://github.com/adamhood15/readme-generator/blob/main/README.md#tests)\n
## -[Questions](https://github.com/adamhood15/readme-generator/blob/main/README.md#questions)\n
## -[Credits](https://github.com/adamhood15/readme-generator/blob/main/README.md#credits)\n

# Installation
${installation}

To install dependencies, run the following command in the command line ${dependencies}.

# Usage
${needToKnow}

To run tests, run the following command in the command line ${tests}.

# License
Notice: This application is covered under the ${license} license.

# Contributing
${openSource}

# Questions
Please reach out to me below if you have any questions.

GitHub User Name: ${userName}
Email: ${email}

# Credits
${credits}`

                        
        await writeFile('../README.md', markdown);
        
    }
    catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
