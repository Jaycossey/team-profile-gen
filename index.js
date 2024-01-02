// GLOBALS ------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// INQUIRER
const questions = require('./promptData/questions');
const prompt = require('./promptData/prompt');

// CLASSES
const Employee = require('./classes/Employee');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

// TEAM, handle storing of data
const team = [];

// OBJECT DESTRUCTURE
const {name, empId, email, manager, engineer, intern, choosePath} = questions;

// MAIN FUNCTION ------------------------------------------------------------
const start = async (member) => {
    // path choice for adding team members
    let choice;
    // user input variables
    let inputName;
    let inputId;
    let inputEmail;
    let inputJob;

    // handle team members structure
    switch(member) {
        case 'Finish': 
            console.log(team);
            return;
        case 'Manager':
            console.log(`Welcome, please enter staff details by following the prompts, starting with the manager:\n`);
            // how do i ensure that the function waits for user input before running next prompt?
            inputName = prompt(name); // this will prompt for name
            inputId = prompt(empId); // this will automatically trigger without waiting for data
            // I can set async await but where do I call await? 
            // team.push(new Manager(inputName, inputId, inputEmail, inputJob));
            break;
        // case 'Engineer':
        //     team.push(new Engineer(inputName, inputId, inputEmail, inputJob));
        //     break;
        // case 'Intern':
        //     team.push(new Intern(inputName, inputId, inputEmail, inputJob));
        //     break;
        default:
            console.log(team);
            return;
    }

}

start('Manager');