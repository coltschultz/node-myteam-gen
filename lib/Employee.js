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
        return `${this.name}`;
    }
    
    getId() {
        return `${this.id}`;
    }
    
    getEmail() {
        return `${this.email}`;
    }
    
    getRole() {
        return `Employee`;
    }

    getInfo() {
        return ``;
    }
}


module.exports = Employee;

