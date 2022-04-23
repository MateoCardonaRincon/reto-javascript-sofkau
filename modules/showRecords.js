import createTitle from "./createTitle.js"
import createButton from "./createButton.js"

var bdiv = document.querySelector("#body-div");

const showRecords = () => {
    // Saving parent's current children (Menu elements)
    let savedMenu = saveMenuChildren()
    let retrievedData = JSON.parse(localStorage.getItem("Records"))
    let data = retrievedData === null ? [] : retrievedData

    // Replacing the prior children
    bdiv.replaceChildren(createTitle("record-title", "Historial de partidas"))
    bdiv.appendChild(createTable(data))
    createBackButton(savedMenu)
};

const saveMenuChildren = () => {
    let menuChildren = {};
    let children = bdiv.children
    for (var i = 1; children.length >= i; i++) {
        menuChildren["child" + i] = children[i - 1]
    }
    return menuChildren
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

    data.sort((a, b) => b.score - a.score);

    data.map((record) => {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        td1.textContent = record.player
        td2.textContent = record.score
        tr.appendChild(td1)
        tr.appendChild(td2)
        table.appendChild(tr)
    });
    return table
}

const createBackButton = (savedMenu) => {
    let backBtn = createButton("backBtn", "Volver al menú", "body-div")

    backBtn.addEventListener('click', () => {
        bdiv.replaceChildren(savedMenu.child1)
        bdiv.appendChild(savedMenu.child2)
        bdiv.appendChild(savedMenu.child3)
        bdiv.appendChild(savedMenu.child4)
    })
    return backBtn
}

export default showRecords;