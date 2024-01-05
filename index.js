// GLOBALS ------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// INQUIRER
const questions = require('./promptData/questions');

// PAGE STRUCTURE
const generateCards = require('./generateStructure/generateCards');
const generateStruct = require('./generateStructure/generateStruct');

// CLASSES
// const Employee = require('./classes/Employee');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

// TEAM, handle storing of data
const team = {
    manager: '',
    engineers: [],
    interns: [],
};

// OBJECT DESTRUCTURE
const {name, empId, email, officeNumber, github, school, choosePath} = questions;

// GENERATE TEAM PAGE -------------------------------------------------------
const generateTeamPage = () => {
    // empty array to handle card generation
    const cards = [];
    // assign each member their card
    const managerCard = generateCards(team.manager, 'manager');
    const engineerCards = team.engineers.forEach((engineer) => {
        generateCards(engineer, 'engineer')});
    const internCards = team.interns.forEach((intern) => {
        generateCards(intern, 'intern')});

    cards.push(managerCard, engineerCards, internCards);
    console.log(cards);
    // console.log(managerCard);
    // html file structure
    const fileStruct = generateStruct(cards);
    // write html file
    fs.writeFile('index.html', fileStruct, (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log(`Success! Your file has been written to {directory}`);
        }
    })
}

// MAIN FUNCTION ------------------------------------------------------------
const runPrompts = (member) => {
    console.log(`tick, ${member}`);
    // handle team members structure
    switch(member) {
        // handle exit clause if finished prompt cycle
        case 'Finish': 
            console.log(team);
            generateTeamPage();
            return;

        // handle manager role initial input
        case 'Manager':
            // usage message
            console.log(`Welcome, please enter staff details by following the prompts, starting with the manager:\n`);

            // let manData = customPrompt([name, empId, email, manager, choosePath]);
            inquirer
                .prompt([name, empId, email, officeNumber, choosePath])
                .then((data) => {
                    // push new team member to array
                    team.manager = (new Manager(data.name, data.empId, data.email, data.officeNumber));
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
                .prompt([name, empId, email, github, choosePath])
                .then((data) => {
                    team.engineers.push(new Engineer(data.name, data.empId, data.email, data.github));
                    runPrompts(data.choosePath);
                })
                .catch((err) => {
                    if (err) console.error(err);
                });
            break;

        // As above for engineer and manager
        case 'Intern':
            inquirer
                .prompt([name, empId, email, school, choosePath])
                .then((data) => {
                    team.interns.push(new Intern(data.name, data.empId, data.email, data.school));
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