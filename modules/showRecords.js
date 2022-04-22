var bdiv = document.querySelector("#body-div");

const showRecords = () => {
    // Saving parent's current children (Menu elements)
    let savedMenu = saveMenuChildren()
    let retrievedData = JSON.parse(localStorage.getItem("Prueba"))
    let data = retrievedData === null ? [] : retrievedData

    bdiv.replaceChildren(createTitle())
    bdiv.appendChild(createTable(data))
    bdiv.appendChild(createBackButton(savedMenu))
};

const saveMenuChildren = () => {
    let menuChildren = [];
    let children = bdiv.children
    for (var i = 1; children.length >= i; i++) {
        menuChildren["child" + i] = children[i - 1]
    }
    return menuChildren
}

const createTitle = () => {
    let title = document.createElement("h3")
    title.setAttribute("class", "title")
    title.setAttribute("id", "record-title")
    title.textContent = "Historial de partidas"
    return title
}

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

    data.map((record) => {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        td1.textContent = record.question
        td2.textContent = record.id
        tr.appendChild(td1)
        tr.appendChild(td2)
        table.appendChild(tr)
    });
    return table
}

const createBackButton = (savedMenu) => {
    let backBtn = document.createElement('input');
    backBtn.setAttribute("id", "backBtn")
    backBtn.setAttribute("type", "button")
    backBtn.setAttribute('value', "Volver al menú")
    backBtn.setAttribute('class', 'buttons')

    backBtn.addEventListener('click', () => {
        bdiv.replaceChildren(savedMenu.child1)
        bdiv.appendChild(savedMenu.child2)
        bdiv.appendChild(savedMenu.child3)
    })
    return backBtn
}

export default showRecords;