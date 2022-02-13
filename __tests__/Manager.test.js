const Manager = require('../lib/Manager')

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Dylan', 28, 'dylan@gmail', 3136186799);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Dylan', 28, 'dylan@gmail', 3136186799);

    expect(manager.getRole()).toEqual("Manager");
}); 