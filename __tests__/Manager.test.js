const Manager = require('../lib/Manager');

jest.mock('../lib/Manager');

test('gets role of manager', () => {
    const manager = new Manager();
    expect(manager.role).toEqual(expect.stringContaining('Manager'));
})
test('gets name of manager', () => {
    const manager = new Manager();
    expect(manager.name).toEqual(expect.stringContaining('Testname'));
})
test('gets id of manager', () => {
    const manager = new Manager();
    expect(manager.id).toEqual(1);
})
test('gets email of manager', () => {
    const manager = new Manager();
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.email.length).toBeGreaterThanOrEqual(4);
})
test('gets phone of manager', () => {
    const manager = new Manager();
    expect(manager.officeNumber).toEqual(expect.stringContaining('1234567890'));
})