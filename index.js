const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');


let employeeQuestions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'employeeName',
        validate: employeeName => {
            if (employeeName) {
                return true;
            } else {
                console.log("Please enter an employee name");
                return false;
            }
        }
    },

    {
        type: 'number',
        message: "What is the employee's ID number?",
        name: 'employeeId',
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log("Please enter an employee ID number")
                return false;
            }
        }
    },

    {
        type: 'input',
        message: "What is the employee's email address?",
        name: 'employeeEmail',
        validate: employeeEmail => {
            if (employeeEmail) {
                return true;
            } else {
                console.log("Please enter an employee email")
                return false;
            }
        }
    },

    {
        type: "list",
        message: "Which type of employee are you creating?",
        name: "employeeChoice",
        choices: [
            'Employee',
            'Manager',
            'Engineer',
            'Intern'
        ]
    }
]

let managerQuestions = [
    {
        type: 'number',
        message: "What is the Manager's office number?",
        name: "managerOfficeNumber",
        validate: managerOfficeNumber => {
            if (managerOfficeNumber) {
                return true;
            } else {
                console.log("Please enter a number")
                return false;
            }
        }
    }
]

let engineerQuestions = [
    {
        type: 'input',
        message: "What is the Engineer's GitHub username?",
        name: 'githubUsername',
        validate: githubUsername => {
            if (githubUsername) {
                return true;
            } else {
                console.log("Please enter a GitHub Username")
                return false;
            }
        }
    }
]

let internQuestions = [
    {
        type: 'input',
        message: "What school is the Intern currently enrolled at?",
        name: 'internSchool',
        validate: internSchool => {
            if (internSchool) {
                return true;
            } else {
                console.log("Please enter a school name")
                return false;
            }
        }
    }
]

function init() {
    inquirer.prompt(employeeQuestions)
    .then(function(answers) {
        if(answers.employeeChoice === 'Manager') {
            
            inquirer.prompt(managerQuestions)
            .then(function(managerAnswers) {
                console.log(answers, managerAnswers);
            })
        } else if(answers.employeeChoice === 'Engineer') {

            inquirer.prompt(engineerQuestions)
            .then(function(engineerAnswers) {
                console.log(answers, engineerAnswers);
            })
        } else if(answers.employeeChoice === 'Intern') {

            inquirer.prompt(internQuestions)
            .then(function(internAnswers) {
                console.log(answers, internAnswers);
            })
        } else {
            console.log(answers)
        }
    })
}

init();