const showRecords = () => {
    let data = JSON.parse(localStorage.getItem("Prueba"))

    let table = document.createElement("table")
    table.setAttribute("id", "records-table")
    let th = document.createElement("th")

    document.body.innerHTML = `<h1>Historial</h1>`
};

export default showRecords;
