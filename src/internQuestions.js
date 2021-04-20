var questionsForIntern = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
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
        message: "Enter your intern's work ID Number:",
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
        message: "Please enter your intern's email",
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
        name: 'school',
        message: "Enter your intern's school name",
        validate: schoolName => {
            if (schoolName) {
                return true;
            } else {
                console.log(".     Please enter your intern's school name!");
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

module.exports = questionsForIntern;