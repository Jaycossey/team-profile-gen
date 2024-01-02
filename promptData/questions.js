const questions = {
    name: {
        type: 'input',
        name: 'name',
        message: 'Enter name:\n'
    },
    empId: {
        type: 'number',
        name: 'empId',
        message: 'Enter Employee ID no.:\n'
    },
    email: {
        type: 'input',
        name: 'email',
        message: 'Enter email address:\n'
    },
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
    },
    choosePath: {
        type: 'list',
        name: 'choosePath',
        message: 'Choose from the following:\n',
        choices: ['Add Engineer', 'Add Intern', 'Finish']
    }
}

module.exports = questions;