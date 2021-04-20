const Manager = require('../lib/Manager')


test('creates an manager object', () => {
    const manager = new Manager('Dave', 12345, 'sample@email.com', 6789);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getName() returns string containing name", () => {
    const manager = new Manager('Dave', 12345, 'sample@email.com', 6789);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name))
});

test("getId() returns string containing id", () => {
    const manager = new Manager('Dave', 12345, 'sample@email.com', 6789);

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test("getEmail() returns string containing email", () => {
    const manager = new Manager('Dave', 12345, 'sample@email.com', 6789);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("getRole() returns Manager", () => {
    const manager = new Manager('Dave', 12345, 'sample@email.com', 6789);

    expect(manager.getRole()).toEqual('Manager');
});