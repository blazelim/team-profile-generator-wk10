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
    let newEmployee = {};
    let Answers = {};

    // change questions according to role input
    if (role === 'Engineer') {
        Answers = await inquirer.prompt(engineerQuestions);
        newEmployee = new Engineer(Answers.name, Answers.id, Answers.email, Answers.github);
    } else if (role === 'Intern') {
        Answers = await inquirer.prompt(internQuestions);
        newEmployee = new Intern(Answers.name, Answers.id, Answers.email, Answers.school);
    } else {
        Answers = await inquirer.prompt(managerQuestions);
        newEmployee = new Manager(Answers.name, Answers.id, Answers.email, Answers.officeNumber);
    }

    teamArray.push(newEmployee);
    console.log(teamArray);

    let nextTeammate = Answers.nextTeammate;
    if (nextTeammate === 'No More Teammates') {
        console.log("generating your HTML!")
    } else {
        console.log("Starting Prompt for your new " + nextTeammate + "!")
        employeeLoop(nextTeammate);
    }
}

employeeLoop('manager');