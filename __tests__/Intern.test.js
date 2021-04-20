const Intern = require('../lib/Intern')


test('creates an intern object', () => {
    const intern = new Intern('Dave', 12345, 'sample@email.com', 'davesSchool');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("getName() returns string containing name", () => {
    const intern = new Intern('Dave', 12345, 'sample@email.com', 'davesSchool');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name))
});

test("getId() returns string containing id", () => {
    const intern = new Intern('Dave', 12345, 'sample@email.com', 'davesSchool');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test("getEmail() returns string containing email", () => {
    const intern = new Intern('Dave', 12345, 'sample@email.com', 'davesSchool');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("getRole() returns Intern", () => {
    const intern = new Intern('Dave', 12345, 'sample@email.com', 'davesSchool');

    expect(intern.getRole()).toEqual('Intern');
});

test("getSchool() returns a string", () => {
    const intern = new Intern('Dave', 12345, 'sample@email.com', 'davesSchool');

    expect(intern.getSchool()).toEqual(expect.any(String));
});