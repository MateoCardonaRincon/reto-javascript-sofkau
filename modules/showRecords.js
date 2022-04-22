var bdiv = document.querySelector("#body-div");

const showRecords = () => {
    let data = JSON.parse(localStorage.getItem("Prueba"));

    var table = document.createElement("table");
    table.setAttribute("id", "records-table");

    let theader = `<table class="table table-striped table-bordered"><tr><th>Pregunta</th><th>Id</th></tr>`;

    let tbody = ``
    data.map((record) => {
        tbody += `<tr><td>${record.question}</td>
      <td>${record.id}</td></tr>`;
    });


    bdiv.innerHTML = theader.concat(tbody)
};

export default showRecords;
