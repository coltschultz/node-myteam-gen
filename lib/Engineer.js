const Employee = require('./Employee.js');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(questions) {
                super(questions);
                this.role = 'Engineer';
                this.questions = new Employee().getQuestions();
                this.questions.push({
                    name: 'github',
                    type: 'input',
                    message: 'Github Username:'
                })

                
}
// End Constructor
// Begin Functions
    getRole() {
        return `Engineer`;
    }

    getGithub() {
        return `${this.github}`;
    }

    getInfo() {
        return `Github Username:`;
    }
}

module.exports = Engineer;