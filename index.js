// import the required modules
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArray = [];

// Questions are slightly different for manager and other employees, thus better to have different question set
const questionsForManager = [
    {
        type: 'input',
        name: 'name',
        message: 'Hello Team Manager, what is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'id',
        message: 'Enter work ID Number:',
        validate: idNumber => {
            if (parseInt(idNumber)) {
                return true;
            } else {
                console.log('.     Please enter your ID Number!');
                return '';
            }
        }
    }, 
    {
        message: "Please enter your email",
        name: "email",
        type: "input",
        default: () => {},
        validate: function (email) {
            // validation for emails
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log(".     Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your office Number:',
        validate: officeNumber => {
            if (parseInt(officeNumber)) {
                return true;
            } else {
                console.log('.     Please enter your office Number!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'nextTeammate',
        message: 'Which type of employee would you like to add next?',
        choices: ["Engineer", "Intern", "No More Teammates"]
    }
];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: `What is your new ${role} your name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'id',
        message: `Enter ${this.name}'s work ID Number:`,
        validate: idNumber => {
            if (parseInt(idNumber)) {
                return true;
            } else {
                console.log(`.     Please enter ${this.name}'s ID Number!`);
                return false;
            }
        }
    }, 
    {
        message: "Please enter your email",
        name: "email",
        type: "input",
        default: () => {},
        validate: function (email) {
            // validation for emails
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log(".     Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your office Number:',
        validate: officeNumber => {
            if (parseInt(officeNumber)) {
                return true;
            } else {
                console.log('.     Please enter your office Number!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'nextTeammate',
        message: 'Which type of employee would you like to add next?',
        choices: ["Engineer", "Intern", "No More Teammates"]
    }
];

async function employeeLoop (role) {

}

async function init () {
    let Answers = await inquirer.prompt(questionsForManager);
    console.log(Answers);

    // breakdown inquirer object
    let manager = new Manager(Answers.name, Answers.id, Answers.email, Answers.officeNumber);

    teamArray.push(manager);

    let nextTeammate = Answers.nextTeammate;

    if (nextTeammate === 'No More Teammates') {
        console.log("generating your HTML!")
    } else {
        console.log("Starting Prompt for your new " + nextTeammate + "!")
        employeeLoop(nextTeammate);
    }
};



//console.log(teamArray);


init();