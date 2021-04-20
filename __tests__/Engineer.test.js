const Engineer = require('../lib/Engineer')


test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', 12345, 'sample@email.com', 'davesgithub');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("getName() returns string containing name", () => {
    const engineer = new Engineer('Dave', 12345, 'sample@email.com', 'davesgithub');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name))
});

test("getId() returns string containing id", () => {
    const engineer = new Engineer('Dave', 12345, 'sample@email.com', 'davesgithub');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("getEmail() returns string containing email", () => {
    const engineer = new Engineer('Dave', 12345, 'sample@email.com', 'davesgithub');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("getRole() returns Engineer", () => {
    const engineer = new Engineer('Dave', 12345, 'sample@email.com', 'davesgithub');

    expect(engineer.getRole()).toEqual('Engineer');
});

test("getGithub() returns a string", () => {
    const engineer = new Engineer('Dave', 12345, 'sample@email.com', 'davesgithub');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});