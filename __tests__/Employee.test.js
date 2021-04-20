const Employee = require('../lib/Employee')


test('creates an employee object', () => {
    const employee = new Employee('Dave', 12345, 'sample@email.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("getName() returns string containing name", () => {
    const employee = new Employee('Dave', 12345, 'sample@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
});

test("getId() returns string containing id", () => {
    const employee = new Employee('Dave', 12345, 'sample@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("getEmail() returns string containing email", () => {
    const employee = new Employee('Dave', 12345, 'sample@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("getRole() returns Employee", () => {
    const employee = new Employee('Dave', 12345, 'sample@email.com');

    expect(employee.getRole()).toEqual('Employee');
});