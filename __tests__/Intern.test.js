const Intern = require('../lib/Intern')

// creates intern object
test('tests creating the intern object', () => {
    const intern = new Intern ('Steve', 27, 'steve@gmail.com', 'Harvard' )
    expect(intern.school).toEqual(expect.any(String));
})

//intern school created
test('tests creating the school', () => {
    const intern = new Intern ('Steve', 27, 'steve@gmail.com', 'Harvard' )
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//gets role
test('gets role of intern', () => {

    const intern = new Intern ('Steve', 27, 'steve@gmail.com', 'Harvard' )
    expect(intern.getRole()).toEqual("Intern");
});