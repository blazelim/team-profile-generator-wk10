const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name = '', id, email, github) {
        // send to Employee parent class
        super(name, id, email);

        // set role to engineer
        this.role = 'Engineer';

        // setting additional information for engineer
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return `This engineer's github is ${this.github}`
    }
}

module.exports = Engineer;