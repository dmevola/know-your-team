const Employee = require('../lib/Employee');

//test creating employee object
test('creates an employee object', () => {
    const employee = new Employee('Dan', 25, 'dmevola@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets name
test('gets employee name', () => {
    const employee = new Employee('Dan', 25, 'dmevola@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id
test(' gets employee id', () => {
    const employee = new Employee('Dan', 25, 'dmevola@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
})


//gets emails
test('gets employee email', () => {
    const employee = new Employee('Dan', 25, 'dmevola@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role
test('gets employee role', () => {
    const employee = new Employee('Dan', 25, 'dmevola@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});