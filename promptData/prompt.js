// custom prompt function to ask specific questions from data
module.exports = runPrompt = (question) => {
    inquirer
        .prompt(question)
        .then((data) => {
            handleData(data);
        })
        .catch((err) => {
            if (err) {
                console.error(err);
            }
        })
}