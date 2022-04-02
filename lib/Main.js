const inquirer = require('inquirer');
const Employee = require('./Employee.js');
const Manager = require('./Manager.js');
var questions = [];

class Main {
    constructor() {
    this.employeeType = '';
    
    }

    promptUser() {
        
        const newQ = new Manager().getQuestions();
        questions = newQ;
        inquirer
        .prompt(questions)
        .then()
        .catch();
    }
}

module.exports = Main;

// promptUser() {
//     inquirer
// }



