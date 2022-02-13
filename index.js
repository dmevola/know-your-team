const fs = require('fs');
const inquirer = require('inquirer');

//import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//generate html
const generateHTML = require("./src/generateHTML")

//create empty array for info
const teamArray = [];

//Manager prompts

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who manages this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the manager");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please assign an ID to the manager',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an ID number for the manager')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter a phone number for the manager',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter a valid phone number')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`Next, add employees to the team`);
    
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Choose the employee role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the employee name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please assign an ID to the employee',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an ID number for the employee')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter employee github username',
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter valid github username')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a valid school for the intern!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee);
        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The new team profile has been successfully generated!")
        }
    })
};

// run manager prompt
addManager()
// run team prompts
.then(addEmployee)
// pass team array to generate html function
.then(teamArray => {
    return generateHTML(teamArray);
})
//pass html to newly generated file
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});