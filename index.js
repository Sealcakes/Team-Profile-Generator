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
    },

    {
        type: 'input',
        message: "What is the employee's ID number?",
        name: 'employeeId'
    },

    {
        type: 'input',
        message: "What is the employee's email address?",
        name: 'employeeEmail'
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
        type: 'input',
        message: "What is the Manager's office number?",
        name: "managerOfficeNumber"
    }
]

let engineerQuestions = [
    {
        type: 'input',
        message: "What is the Engineer's GitHub username?",
        name: 'githubUsername'
    }
]

let internQuestions = [
    {
        type: 'input',
        message: "What school is the Intern currently enrolled at?",
        name: 'internSchool'
    }
]

function init() {
    inquirer.prompt(employeeQuestions)
    .then(function(answers) {
        if(answers.employeeChoice === 'Manager') {
            
            inquirer.prompt(managerQuestions)
            .then(function(managerAnswers) {
                console.log(answers)
                console.log(managerAnswers)
            })
        } else if(answers.employeeChoice === 'Engineer') {

            inquirer.prompt(engineerQuestions)
            .then(function(engineerAnswers) {
                console.log(answers)
                console.log(engineerAnswers)
            })
        } else if(answers.employeeChoice === 'Intern') {

            inquirer.prompt(internQuestions)
            .then(function(internAnswers) {
                console.log(answers)
                console.log(internAnswers)
            })
        } else {
            console.log(answers)
        }
    })
}

init();