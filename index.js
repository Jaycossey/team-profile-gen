// GLOBALS ------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// INQUIRER
const questions = require('./promptData/questions');
const customPrompt = require('./promptData/prompt');

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
const runPrompts = (member) => {
    // path choice for adding team members
    let choice;

    // handle team members structure
    switch(member) {
        // handle exit clause if finished prompt cycle
        case 'Finish': 
            console.log(team);
            return;

        // handle manager role initial input
        case 'Manager':
            // usage message
            console.log(`Welcome, please enter staff details by following the prompts, starting with the manager:\n`);

            // store data, prompt user for input and assign new object
            let manData = customPrompt([name, empId, email, manager, choosePath]);
            team.push(new Manager(manData.name, manData.empId, manData.email, manData.manager));

            // handle choice path for subsequent prompts
            choice = manData.choosePath;
            // recursive call to handle loop
            runPrompts(choice);
            break;

        // handle engineer data in the same manner as above
        case 'Engineer':            
            let engData = customPrompt([name, empId, email, engineer, choosePath]);
            team.push(new Engineer(engData.name, engData.empId, engData.email, engData.engineer));

            choice = engData.choosePath;
            runPrompts(choice);
            break;

        // As above for engineer and manager
        case 'Intern':
            let intData = customPrompt([name, empId, email, intern, choosePath]);
            team.push(new Intern(intData.name, intData.empId, intData.email, intData.intern));

            choice = intData.choosePath;
            runPrompts(choice);

            break;
    }
}

// run initial prompts
runPrompts('Manager');