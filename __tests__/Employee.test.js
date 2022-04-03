const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('gets role of Employee', () => {
    const employee = new Employee();
    expect(employee.role).toEqual(expect.stringContaining('Employee'));
})
test('gets name of employee', () => {
    const employee = new Employee();
    expect(employee.name).toEqual(expect.stringContaining('Testname'));
  })
test('gets id of employee', () => {
    const employee = new Employee();
    expect(employee.id).toEqual(1);
})
test('gets email of employee', () => {
    const employee = new Employee();
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.email.length).toBeGreaterThanOrEqual(4);
})

