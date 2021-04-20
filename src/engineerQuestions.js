var questionsForEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
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
        message: "Enter your engineer's work ID Number:",
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
        message: "Please enter your engineer's email",
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
        name: 'github',
        message: "Enter your engineer's github username (no @)",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log(".     Please enter your engineer's github username!");
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

module.exports = questionsForEngineer;