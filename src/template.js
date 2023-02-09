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
    <title>Document</title>
    </head>
    <body>
        ${employees}
    </body>
    </html>`

    return template;
}

function generateEmployeeCards(employee) {

}

module.exports = generateHTML;