const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./Employee.js");
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
const generateDoc = require("../src/doc-template.js");

let questions = [];
let employees = [];
let currentRole = "";
let currentLabel = "";

class Base {
  constructor() {}

  promptUser() {
    // Function for Generating HTML & Copying Style Sheet
    const generatePage = function (arg) {
      let theDoc = generateDoc(arg);

      fs.writeFile("./dist/Your-Team.html", theDoc, (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });

      fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    };

    // Function to prompt the user and push the answers
    const promptNow = function () {
      inquirer
        .prompt(questions)
        .then((answers3) => {
          answers3.role = currentRole;
          answers3.label = currentLabel;
          answers3.info = Object.values(answers3)[3];
          employees.push(answers3);
          whatNext();
        })
        .catch((err) => console.log(err));
    };

    // Function to load new questions
    const newQuestions = function (arg) {
      currentRole = new arg().getRole();
      currentLabel = new arg().getInfo();
      let newQ = new arg().getQuestions();
      questions = newQ;
      console.log("Please enter the information for the " + currentRole + ":");
    };

    // Function to allow user to choose what to add next
    const whatNext = function () {
      inquirer
        .prompt({
          name: "next",
          type: "list",
          message: "What would you like to add next?",
          choices: ["Engineer", "Intern", "Finish Building Team", "Exit Without Saving"],
        })
        .then((answers2) => {
          if (answers2.next === "Engineer") {
            newQuestions(Engineer);
            promptNow();
          } else if (answers2.next === "Intern") {
            newQuestions(Intern);
            promptNow();
          } else if (answers2.next === "Finish Building Team") {
            generatePage(employees);
            console.log("Exiting. Find your document at ./dist/Your-Team.html");
          } else {
            console.log("Exiting...");
          }
        })
        .catch((err) => console.log(err));
    };

    // Intialize
    newQuestions(Manager);
    promptNow();
  }
}

module.exports = Base;
