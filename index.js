// import the required modules
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const managerQuestions = require('./src/managerQuestions')

const teamArray = [];

// async function employeeLoop (role) {

// }

async function init () {
    let Answers = await inquirer.prompt(managerQuestions);
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