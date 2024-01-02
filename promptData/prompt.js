const inquirer = require('inquirer');

// custom prompt function to ask specific questions from data
module.exports = prompt = (question) => {
    inquirer
        .prompt(question)
        .then((data) => {
            console.log(`logPrompt: ${data.name}`);
            return data;
        })
        .catch((err) => {
            if (err) {
                console.error(err);
            }
        })
}