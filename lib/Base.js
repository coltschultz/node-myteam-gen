const inquirer = require('inquirer');
const Employee = require('./Employee.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');

let questions = [];
let employees = [];

class Base {
    constructor() {
    }

    promptUser() {
        const promptNow = function() {
            inquirer
            .prompt(questions)
            .then(answers3 => {
                employees.push(answers3)
                whatNext(); 
            })
            .catch(err => console.log(err));
        }

        const newQuestions = function(arg) {
            let role = new arg().getRole()
            let newQ = new arg().getQuestions();
            questions = newQ;
            console.log('Please enter the information for the ' + role + ':');
        }

        const whatNext = function() {
            inquirer.prompt(
                {
                    name: 'next', 
                    type: 'list', 
                    message: 'What would you like to add next?', 
                    choices: ['Engineer', 'Intern', 'Exit & Save', 'Exit Without Saving'] })
            .then(answers2 => {
                if (answers2.next === 'Engineer') {
                    newQuestions(Engineer);
                    promptNow();
                } else if (answers2.next === 'Intern') {
                    newQuestions(Intern);
                    promptNow();
                } else if (answers2.next === 'Exit & Save') {
                    generatePage();
                } else {
                    console.log('Exiting...');
                }
            })
            .catch(err => console.log(err));
        }
        
        newQuestions(Manager);
        promptNow();

        }
    }


module.exports = Base;



