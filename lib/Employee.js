class Employee {
    constructor() {

    this.role = 'Employee';
    this.questions = [{
                        name: 'name',
                        type: 'input',
                        message: 'Name:'
                    },
                    {
                        name: 'id',
                        type: 'input',
                        message: 'ID:'
                    },
                    {
                        name: 'email',
                        type: 'input',
                        message: 'Email:'
                    }];

    }
    getQuestions() {
        return this.questions;
    }
    getName() {
        return `Name: ${this.name}`;
    }
    
    getId() {
        return `ID: ${this.id}`;
    }
    
    getEmail() {
        return `Email: ${this.email}`;
    }
    
    getRole() {
        return `Employee`;
    }

    getInfo() {
        return ``;
    }
}


module.exports = Employee;

