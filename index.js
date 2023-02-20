const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// From the docs, the method is inquirer.prompt(questions, answers) => promise. The questions variable will be an array containing question objects. Then the answers obtained from user response will be stored in an object.

// First, create the array of questions for the user
//Each question will be represented by an object that contains question-related values, depending on the type. 

const questions = [

    // Title (According to the docs, we take type, name and message properties for input type)
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
        name: "deployment",
        message: "Provide a link to where you have the project deployed."
    },
    {
        type: "input",
        name: "repo",
        message: "Provide the link to the project code repository."
    },
    {
        type: "input",
        name: "demo",
        message: "Provide a link to a screenshot of the project or application in use."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide the requisite usage information for your project."
    },
    // Credits
    {
        type: "input",
        name: "credits",
        message: "List any collaborators with links to their GitHub profiles, as well as creators of any third-party assets with links to their primary web presence."
    },
    // License (According to the docs, we take type, choices(an array), name and message for list type)
    {
        type: "list", // list used as user can only choose one
        choices: [
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "Creative Commons CC0",
            "Eclipse Public License 1.0",
            "GNU GPL v2",
            "GNU GPL v3",
            "Hippocratic License 2.1",
            "Hippocratic License 3.0",
            "IBM Public License Version 1.0",
            "ISC License (ISC)",
            "MIT License",
            "Mozilla Public License 2.0",
            "Open Data Commons Attribution License (BY)",
            "Open Database License (ODbL)",
            "Public Domain Dedication and License (PDDL)"
        ],
        name: "license",
        message: "What is the project license type?" 
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
        message: "Provide test instructions for the project with examples, if applicable."
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

    fs.writeFile(fileName, data, (err) =>
    
    err ? console.log(err) : console.log(`Your ${fileName} file has been successfully generated.`));
}

// Function to initialise the program
function init() {

    inquirer
  .prompt(questions)
  .then((answers) => {

    //console.log(answers);

    writeToFile("README.md", generateMarkdown(answers));

  })

}

// Calling the function to initialise the application program

init();
