const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/template');

const employeeList = [];

let startProgram = [
    {
        type: 'confirm',
        message: "Do you have employee information to input?",
        name: 'startProgram',
    }
]

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
        type: 'input',
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

let additionalEmployee = [
    {
        type: 'confirm',
        message: "Do you have another employee to input?",
        name: 'additionalEmployee',
        
    }
]

inquirer.prompt(startProgram)
.then(function(answers) {
    if(answers.startProgram === true) {
        init();
    } else {
        return;
    }
})

function init() {
    inquirer.prompt(employeeQuestions)
    .then(function(answers) {
        if(answers.employeeChoice === 'Manager') {
            
            inquirer.prompt(managerQuestions)
            .then(function(managerAnswers) {
                const managerObj = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, managerAnswers.managerOfficeNumber);
                employeeList.push(managerObj);
                inquirer.prompt(additionalEmployee)
                .then(function(additionalAnswer) {
                    if (additionalAnswer.additionalEmployee === true) {
                        init();
                    } else {
                        createWebpage(employeeList);
                        return;
                    }
                })
            })
        } else if(answers.employeeChoice === 'Engineer') {

            inquirer.prompt(engineerQuestions)
            .then(function(engineerAnswers) {
                const engineerObj = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, engineerAnswers.githubUsername);
                employeeList.push(engineerObj);
                inquirer.prompt(additionalEmployee)
                .then(function(additionalAnswer) {
                    if (additionalAnswer.additionalEmployee === true) {
                        init();
                    } else {
                        createWebpage(employeeList);
                        return;
                    }
                })
            })
        } else if(answers.employeeChoice === 'Intern') {

            inquirer.prompt(internQuestions)
            .then(function(internAnswers) {
                const internObj = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, internAnswers.internSchool);
                employeeList.push(internObj);
                inquirer.prompt(additionalEmployee)
                .then(function(additionalAnswer) {
                    if (additionalAnswer.additionalEmployee === true) {
                        init();
                    } else {
                        createWebpage(employeeList);
                        return;
                    }
                })
            })
        } else {
            const employeeObj = new Employee(answers.employeeName, answers.employeeId, answers.employeeEmail);
            employeeList.push(employeeObj);
            inquirer.prompt(additionalEmployee)
            .then(function(additionalAnswer) {
                if (additionalAnswer.additionalEmployee === true) {
                    init();
                } else {
                    createWebpage(employeeList);
                    return;
                }
            })
        }
    })
    
}

function createWebpage(employees) {
    let data = generateHTML(employees);
    fs.writeFile("./dist/test.html", data, (err) => {
        if(err) {
            console.error(err)
        } else {
            console.log("Successfully created HTML File")
        }
    })
}
