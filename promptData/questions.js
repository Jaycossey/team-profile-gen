module.exports = questions = {
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
    officeNumber: {
        type: 'number',
        name: 'officeNumber',
        message: 'Enter Office No.:\n'
    },
    github: {
        type: 'input',
        name: 'github',
        message: 'Enter Github Username:\n'
    },
    school: {
        type: 'input',
        name: 'school',
        message: 'Enter School/University:\n'
    },
    choosePath: {
        type: 'list',
        name: 'choosePath',
        message: 'Choose from the following to create a new member or end program:\n',
        choices: ['Engineer', 'Intern', 'Finish']
    }
}
