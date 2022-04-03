const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer');

test('gets role of Engineer', () => {
    const engineer = new Engineer();
    expect(engineer.role).toEqual(expect.stringContaining('Engineer'));
})
test('gets name of engineer', () => {
    const engineer = new Engineer();
    expect(engineer.name).toEqual(expect.stringContaining('Testname'));
})
test('gets id of engineer', () => {
    const engineer = new Engineer();
    expect(engineer.id).toEqual(1);
})
test('gets email of engineer', () => {
    const engineer = new Engineer();
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.email.length).toBeGreaterThanOrEqual(4);
})
test('gets github of Engineer', () => {
    const engineer = new Engineer();
    expect(engineer.github).toEqual(expect.stringContaining('testusername'));
})