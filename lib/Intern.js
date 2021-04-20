const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name = '', id, email, school) {
        // send to Employee parent class
        super(name, id, email);

        // set role to engineer
        this.role = 'Intern';

        // setting additional information for engineer
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return `This engineer's school is ${this.school}`
    }
}

module.exports = Intern;