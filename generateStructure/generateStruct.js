module.exports = generateStruct = (team) => {

    return `
<div class="card">
    <h2>${team.name}</h2>
    <h4>Employee ID: ${team.empId}</h4>
    <h4></h4>
</div>
    `
}