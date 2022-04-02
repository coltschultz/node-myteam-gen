// Template:
//     name:
//     id:
//     email:
//     getName()
//     getId()
//     getEmail()
//     getRole()

const inquirer = require('inquirer');

class Employee {
    constructor() {
// Get Basic Info
inquirer
.prompt([
    {
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
    }
])
.then(answers => {
    this.name = answers.name;
    this.id = answers.id;
    this.email = answers.email;
})
.catch(err => console.log(err));


}
// Constructor Ends
// Functions Begin
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

}

module.exports = Employee;