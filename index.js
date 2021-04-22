// import the required modules
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const fsPromises = fs.promises;
const templateGenerator = require('./src/templateGenerator')

const managerQuestions = require('./src/managerQuestions');
const engineerQuestions = require('./src/engineerQuestions');
const internQuestions = require('./src/internQuestions');

const teamArray = [];

function writeToFile(fileName, data) {
    fsPromises.writeFile(fileName, data, err => {
            // if theres an error, reject the primise and send the error to the promises catch method
            if (err) {
                reject(err);
                //return out fo the function to make sure the promise doesnt accidentally execute the resolve function
                return;
            }

            // if everything went well, reseolve the promise and send the successful promise to the then() statement
            resolve({
                ok: true,
                message: 'file created!'
            });
        })
}

async function employeeLoop (role) {
    let newEmployee = {};
    let Answers = {};

    // change questions according to role input, the "else" will only occur on initialization for the team manager
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
        let generatedTemplate = templateGenerator(teamArray);

        writeToFile('./dist/index.html', generatedTemplate);
        console.log("README is generated in the dist folder!")

    } else {
        console.log("Starting Prompt for your new " + nextTeammate + "!")
        employeeLoop(nextTeammate);
    }
}

// initialize javascript
employeeLoop('Manager');