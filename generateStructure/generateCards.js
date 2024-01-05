module.exports = generateCards = (team, job) => {
    // this is simply the card data, use team.map() to handle all data in the array
    // console.log(team);
    let roleText;
    switch(job) {
        case 'manager':
            roleText = `Office Number: ${team.getRole()}`;
            break;
        case 'engineer':
            roleText = `GitHub: ${team.getRole()}`;
            break;
        case 'intern':
            roleText = `School: ${team.getRole()}`;
            break;
        default:
            return;
    }

    return `
    <div class="card">
        <h1>Name: ${team.getName()}</h1>
        <h3>Employee ID: ${team.getId()}</h3>
        <h3>Email Address: ${team.getEmail()}</h3>
        <h3>${job}</h3>
    </div>
    `
}