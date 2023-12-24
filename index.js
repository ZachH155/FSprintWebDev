//fetch and read and iterate over the data
fetch("./data.json")
    .then(response => response.json())
    .then(response => {

        const container = document.createElement("div");
        container.id = "containTheJSON";

        response.forEach(record => {
        //every employee gets a special mandated company div
        const containTheJSON = document.createElement("div");
        containTheJSON.className = "record";

        containTheJSON.innerHTML = `
            <h1>${employeeName(record)}</h1>
            <p>Desk Number: ${deskNum(record)}</p>
            <p>Employment Status: ${employmentStatus(record)}</p>
        `;

        //add the div to the container
        container.appendChild(containTheJSON);


        //add the container to the body of the html
        document.body.appendChild(container);

        //console.log
        console.log("")
        console.log(employeeName(record));
        console.log(deskNum(record));
        console.log(employmentStatus(record));
        
        });
    })
    .catch(error => {
        console.error(error);
      });


//functions

function employeeName(record) {

    return `${record.employee}`;

}

function deskNum(record) {

    return `${record.deskNum}`;

}

function employmentStatus(record) {

    return `${record.status}`;

}