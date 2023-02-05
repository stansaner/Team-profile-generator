const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// How to use inquirer
// https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts


// Adding an Engineer

function addEngineer() {
    console.log('Adding an engineer');
    // Call main menu again to show the menu after adding an engineer
    showMainMenu();
}

// Adding an Intern

function addIntern() {
    console.log('Adding an Intern');
    // Call main menu again to show the menu after adding an intern
    showMainMenu();
}

// This is the menu prompting for additional team  members in a loop until
// an option to finish is chosen

function showMainMenu() {
    // Show a prompt with 3 choices - engineer, intern or to finish
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Please select an option.',
      choices: [
        {
          name: 'Add an engineer',
          value: 'engineer'
        },
        {
          name: 'Add an Intern',
          value: 'intern'
        },
        {
          name: 'Finish adding team members',
          value: 'exit'
        }
      ]
    }).then(choice => {
      // Call a function based on their choice
      switch (choice.option) {
        case 'engineer':
            addEngineer();
            break;
        case 'intern':
            addIntern();
            break;
        default:
            console.log('Thanks for using the Team Profile App!');
            // Call render from here
            process.exit();
      }
    })
  }

// The first function called from init()
// Adds a manager object to the array of object
// then it calls menu to add an engineer, intern or to finish

function generateManager() {

    inquirer.prompt([
        {
            name: 'name',
            message: 'Please enter the Manager\'s name:'
        },
        {
            name: 'employeeID',
            message: 'Please enter Manager\'s employee ID:'
        },
        {
            name: 'email',
            message:'Please enter Manager\'s email address:'
        },
        {
            name: 'officeNumber',
            message: 'Please enter Manager\'s office number:'
        }
    ]).then(answers => {
        // console.log(answers);
        const manager = new Manager(answers.name, answers.employeeID, answers.email, answers.officeNumber);
        console.log(manager);
        showMainMenu();
    });
 }


 // function to initialize program
function init() {
    generateManager();
}
 
 // function call to initialize program
 // Launch everything from here
 init();