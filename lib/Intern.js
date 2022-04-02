const Employee = require('./Employee.js');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(questions) {
                super(questions);

                this.questions = new Employee().getQuestions();
                this.questions.push({
                    name: 'school',
                    type: 'input',
                    message: 'School:'
                })

                
}
// End Constructor
// Begin Functions
    getRole() {
        return `Intern`;
    }

    getSchool() {
        return `${this.school}`;
    }
}

module.exports = Intern;