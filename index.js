const fs = require('fs');
const inquirer = require('inquirer');

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

