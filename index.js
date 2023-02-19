const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    // Title
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    // Description
    {
        type: "input",
        name: "description",
        message: "Give a description of your project."
    },
    // Installation
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions for your project."
    },
    // Usage
    {
        type: "input",
        name: "usage",
        message: "Provide the requisite usage information for your project."
    },
    // License
    {
        type: "list", // list - can only choose one, checkbox - you can choose multiple
        choices: [],
        name: "license",
        message: "What is the project license type?" // Want to use this answer to create a badge, and have a license notice
    },
    // Contributing
    {
        type: "input",
        name: "contributing",
        message: "Provide contribution guidelines for the project."
    },
    // Tests
    {
        type: "input",
        name: "tests",
        message: "Provide test instructions for the project."
    },
    // Questions
    {
        type: "input",
        name: "github",
        message: "To receive questions and feedback, what is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?" // Add further message on how to reach author if any questions
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

}

// function call to initialize program
init();
