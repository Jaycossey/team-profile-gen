const questions = {
    repeatingQuestions: [
        {
            type: 'input',
            name: 'name',
            message: 'Enter name:\n'
        },
        {
            type: 'number',
            name: 'empId',
            message: 'Enter Employee ID no.:\n'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address:\n'
        },
        {
            type: 'list',
            name: 'choosePath',
            message: 'Choose from the following:\n',
            choices: ['Add Engineer', 'Add Intern', 'Finish']
        }
    ],
    manager: {
        type: 'number',
        name: 'officeNo',
        message: 'Enter Office No.:\n'
    },
    engineer: {
        type: 'input',
        name: 'github',
        message: 'Enter Github Username:\n'
    },
    intern: {
        type: 'input',
        name: 'school',
        message: 'Enter School/University:\n'
    }
}

module.exports = questions;