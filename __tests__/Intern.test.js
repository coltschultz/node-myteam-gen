const Intern = require('../lib/Intern');

jest.mock('../lib/Intern');

test('gets role of intern', () => {
    const intern = new Intern();
    expect(intern.role).toEqual(expect.stringContaining('Intern'));
})
test('gets name of intern', () => {
    const intern = new Intern();
    expect(intern.name).toEqual(expect.stringContaining('Testname'));
})
test('gets id of intern', () => {
    const intern = new Intern();
    expect(intern.id).toEqual(1);
})
test('gets email of intern', () => {
    const intern = new Intern();
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.email.length).toBeGreaterThanOrEqual(4);
})
test('gets school of intern', () => {
    const intern = new Intern();
    expect(intern.school).toEqual(expect.stringContaining('testschool'));
})