const inquirer = require('inquirer');

// custom prompt function to ask specific questions from data
module.exports = runPrompt = (question) => {
    inquirer
        .prompt(question)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            if (err) {
                console.error(err);
            }
        })
}