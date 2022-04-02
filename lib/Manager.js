const Employee = require('./Employee.js');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(questions) {
                super(questions);
                this.role = 'Manager';
                this.questions = new Employee().getQuestions();
                this.questions.push({
                    name: 'officeNumber',
                    type: 'input',
                    message: 'Office Number:'
                })

                
}
// End Constructor
// Begin Functions
    getRole() {
        return `Manager`;
    }
    getInfo() {
        return `Office Number:`;
    }
}

module.exports = Manager;