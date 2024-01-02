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

// Now Im set up, I need the following:
/**
 * write an algorithm that prompts for user input
 * begin with creating a new manager
 * then assign the manager data
 * then prompt for new staff
 * if 'finished' run template gen
 * if engineer run engineer class then prompt for new staff
 * else if intern run intern class then prompt for new staff
 * 
 * 
 */

// usage instructions
