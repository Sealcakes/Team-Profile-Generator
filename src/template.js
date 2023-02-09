const index = require('../index');


function generateHTML(employees) {
    const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <script src="https://kit.fontawesome.com/ff875ebe18.js" crossorigin="anonymous"></script>
    <title>Document</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class='card-container'>
            ${generateManagerCards(employees)}
            ${generateEngineerCards(employees)}
            ${generateEmployeeCards(employees)}
            ${generateInternCards(employees)}
        </div>
    </body>
    </html>`

    return template;
}

function generateManagerCards(employees) {
    let managerCards = '';
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].getRole() === 'Manager') {
            managerCards += `
            <div class='employee-card'>
                <div class='employee-name'>
                    <p>${employees[i].getName()}</p>
                    <p><i class="fa-solid fa-mug-hot"></i>${employees[i].getRole()}</p>
                </div>
                <div class='employee-information'>
                    <div class='employee-id'>
                        <p>ID: ${employees[i].getId()}</p>
                    </div>
                    <div class='employee-email'>
                        <p>Email: <a href = 'mailto: ${employees[i].getEmail()}'>${employees[i].getEmail()}</a></p>
                    </div>
                    <div class='additional-info'>
                        <p>Office Number: ${employees[i].officeNumber}</p>
                    </div>
                </div>
            </div>`
        }        
    }

    return managerCards;    
}

function generateEngineerCards(employees) {
    let engineerCards = '';
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].getRole() === 'Engineer') {
            engineerCards += `
            <div class='employee-card'>
                <div class='employee-name'>
                    <p>${employees[i].getName()}</p>
                    <p><i class="fa-solid fa-glasses"></i>${employees[i].getRole()}</p>
                </div>
                <div class='employee-information'>
                    <div class='employee-id'>
                        <p>ID: ${employees[i].getId()}</p>
                    </div>
                    <div class='employee-email'>
                        <p>Email: <a href = 'mailto: ${employees[i].getEmail()}'>${employees[i].getEmail()}</a></p>
                    </div>
                    <div class='additional-info'>
                        <p>GitHub: <a href = 'https://github.com/${employees[i].getGithub()}'>${employees[i].getGithub()}</a></p>
                    </div>
                </div>
            </div>`
        }
    }
    return engineerCards;
}

function generateEmployeeCards(employees) {
    let employeeCards = '';
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].getRole() === 'Employee') {
            employeeCards += `
            <div class='employee-card'>
                <div class='employee-name'>
                    <p>${employees[i].getName()}</p>
                    <p><i class="fa-solid fa-briefcase"></i>${employees[i].getRole()}</p>
                </div>
                <div class='employee-information'>
                    <div class='employee-id'>
                        <p>ID: ${employees[i].getId()}</p>
                    </div>
                    <div class='employee-email'>
                        <p>Email: <a href = 'mailto: ${employees[i].getEmail()}'>${employees[i].getEmail()}</a></p>
                    </div>
                </div>
            </div>`
        }
    }
    return employeeCards;
}

function generateInternCards(employees) {
    let internCards = '';
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].getRole() === 'Intern') {
            internCards += `
            <div class='employee-card'>
                <div class='employee-name'>
                    <p>${employees[i].getName()}</p>
                    <p><i class="fa-solid fa-user-graduate"></i>${employees[i].getRole()}</p>
                </div>
                <div class='employee-information'>
                    <div class='employee-id'>
                        <p>ID: ${employees[i].getId()}</p>
                    </div>
                    <div class='employee-email'>
                        <p>Email: <a href = 'mailto: ${employees[i].getEmail()}'>${employees[i].getEmail()}</a></p>
                    </div>
                    <div class='additional-info'>
                        <p>School: ${employees[i].getSchool()}</p>
                    </div>
                </div>
            </div>`
        }
    }
    return internCards;
}

module.exports = generateHTML;