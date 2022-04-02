const Employee = require('./Employee.js');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor() {
                super();

                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'Office Number:'
                    }
                ])
                .then(answers => {
                    this.officeNumber = answers.officeNumber;
                })
                .catch(err => console.log(err));

        
        

    }
// End Constructor
// Begin Functions
    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;