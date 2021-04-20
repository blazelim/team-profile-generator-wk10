// Questions are slightly different for manager and other employees, thus better to have different question set
var questionsForManager = [
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

module.exports = questionsForManager;