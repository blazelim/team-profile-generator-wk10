// import the required modules
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQuestions = require('./src/managerQuestions');
const engineerQuestions = require('./src/engineerQuestions');
const internQuestions = require('./src/internQuestions');

const teamArray = [];

async function employeeLoop (role) {
    if (role === 'Engineer') {
        let Answers = await inquirer.prompt(engineerQuestions);
    } else if (role === 'Intern') {
        let Answers = await inquirer.prompt(internQuestions);
    } else {
        console.log("Something went wrong with this binary selection")
    }
}

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