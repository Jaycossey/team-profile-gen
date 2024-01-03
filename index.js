// GLOBALS ------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// INQUIRER
const questions = require('./promptData/questions');

// CLASSES
// const Employee = require('./classes/Employee');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

// TEAM, handle storing of data
const team = [];

// OBJECT DESTRUCTURE
const {name, empId, email, manager, engineer, intern, choosePath} = questions;

// MAIN FUNCTION ------------------------------------------------------------
const runPrompts = (member) => {
    console.log(`tick, ${member}`);
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

            // let manData = customPrompt([name, empId, email, manager, choosePath]);
            inquirer
                .prompt([name, empId, email, manager, choosePath])
                .then((data) => {
                    // push new team member to array
                    team.push(new Manager(data.name, data.empId, data.email, data.manager));
                    // handle choice path for subsequent prompts
                    runPrompts(data.choosePath);
                })
                .catch((err) => {
                    if (err) console.error(err);
                });

            break;

        // handle engineer data in the same manner as above
        case 'Engineer':
            inquirer
                .prompt([name, empId, email, engineer, choosePath])
                .then((data) => {
                    team.push(new Engineer(data.name, data.empId, data.email, data.engineer));
                    runPrompts(data.choosePath);
                })
                .catch((err) => {
                    if (err) console.error(err);
                });
            // runPrompts(choice);
            break;

        // As above for engineer and manager
        case 'Intern':
            inquirer
                .prompt([name, empId, email, intern, choosePath])
                .then((data) => {
                    team.push(new Intern(data.name, data.empId, data.email, data.Intern));
                    runPrompts(data.choosePath);
                })
                .catch((err) => {
                    if (err) console.error(err);
                });
            break;
    }
}

// run initial prompts
runPrompts('Manager');