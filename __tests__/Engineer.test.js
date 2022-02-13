const Engineer = require('../lib/Engineer')

//test creating object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Dave', 26, 'dave@gmail.com', 'dave123')
    expect(engineer.github).toEqual(expect.any(String));
});

//test github profile
test('get engineer github profile', () => {
    const engineer = new Engineer('Dave', 26, 'dave@gmail.com', 'dave123')
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

//gets role
test('get role of engineer', () => {
    const engineer = new Engineer('Dave', 26, 'dave@gmail.com', 'dave123')
    expect(engineer.getRole()).toEqual("Engineer");
})