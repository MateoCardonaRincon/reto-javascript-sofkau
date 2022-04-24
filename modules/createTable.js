const createTable = (data) => {
    let table = document.createElement('table')
    let trow = document.createElement('tr')
    let thead1 = document.createElement('th')
    thead1.textContent = "Jugador"
    let thead2 = document.createElement('th')
    thead2.textContent = "Puntaje"
    trow.appendChild(thead1)
    trow.appendChild(thead2)
    table.appendChild(trow)

    data.sort((a, b) => b.score - a.score);

    data.map((record) => {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        td1.textContent = record.name
        td2.textContent = record.score
        tr.appendChild(td1)
        tr.appendChild(td2)
        table.appendChild(tr)
    });
    return table
}

export {createTable};