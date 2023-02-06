const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


let employee = new Employee('Steve', 0030, 'steve@notanemail.com');
let manager = new Manager('Mark', 0010, 'mark@notanemail.com', 103);
let engineer = new Engineer('Taylor', 0020, 'taylor@notanemail.com', 'github.com/sealcakes');
let intern = new Intern('Sacha', 0040, 'sacha@notanemail.com', 'Southern Methodist University');


console.log(`${employee.name}, ${employee.email}, ${employee.id}, ${employee.getRole()}, ${employee.getEmail()}`);
console.log(`${manager.getName()}, ${manager.getRole()}, ${manager.officeNumber}`);
console.log(`${engineer.getName()}, ${engineer.getRole()}, ${engineer.getGithub()}`);
console.log(`${intern.getName()}, ${intern.getRole()}, ${intern.getSchool()}`);