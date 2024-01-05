module.exports = generateCards = (team, job) => {
    // this is simply the card data, use team.map() to handle all data in the array
    // console.log(team);
    let roleText;
    switch(job) {
        case 'manager':
            roleText = `${team.getRole()}\nOffice Number: ${team.getOfficeNumber()}`;
            break;
        case 'engineer':
            roleText = `${team.getRole()}\nGitHub: ${team.getGithub()}`;
            break;
        case 'intern':
            roleText = `${team.getRole()}\nSchool: ${team.getSchool()}`;
            break;
        default:
            return;
    }

    return (`
    <div class="card">
        <h1>Name: ${team.getName()}</h1>
        <h3>Employee ID: ${team.getId()}</h3>
        <h3>Email Address: ${team.getEmail()}</h3>
        <h3>${roleText}</h3>
    </div>
    `)
}