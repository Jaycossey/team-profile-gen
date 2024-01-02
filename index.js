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
const runPrompts = async (member) => {
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
            const managerQuestions = [name, empId, email, manager, choosePath];
            const manData = prompt(managerQuestions);
            // console.log(`log1: ${data.name, data.empId, data.email, data.manager}`);
            break;
        case 'Engineer':
            // team.push(new Engineer(inputName, inputId, inputEmail, inputJob));
            const engineerQuestions = [name, empId, email, engineer, choosePath];
            const engData = prompt(engineerQuestions);
            break;
        case 'Intern':
            const internQuestions = [name, empId, email, intern, choosePath];
            const intData = prompt(internQuestions);
            // team.push(new Intern(inputName, inputId, inputEmail, inputJob));
            break;
        default:
            console.log(team);
            return;
    }
    runPrompts(choice);
}

runPrompts('Manager');