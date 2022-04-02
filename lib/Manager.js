const Employee = require('./Employee.js');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(questions) {
                super(questions);

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
}

module.exports = Manager;