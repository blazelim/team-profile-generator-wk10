class Employee {
    constructor(name = '', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `This person's name is ${this.name}.`
    };

    getId() {
        return `${this.name}'s id Number is ${this.id}`
    };

    getEmail() {
        return `${this.name}'s email is ${this.email}`
    };

    getRole() {
        return 'Employee'
    };
}

module.exports = Employee;