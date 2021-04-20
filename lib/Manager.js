const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = '', id, email, officeNumber) {
        // send to Employee parent class
        super(name, id, email);

        // set role to manager
        this.role = 'Manager';

        // setting additional information for manager
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;