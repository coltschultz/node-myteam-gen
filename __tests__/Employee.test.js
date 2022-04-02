
const Employee = require('../lib/Employee.js');
jest.mock('../lib/Employee.js');

test('gets name of employee', () => {
    const employee = new Employee();
  
    expect(employee.role).toEqual(expect.stringContaining('Employee'));
    // expect(employee.getId()).toEqual(1);
  });