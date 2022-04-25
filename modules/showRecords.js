import createTitle from "./createTitle.js"
import {createTable} from "./createTable.js"
import { saveMenuChildren } from "./saveMenuChildren.js"
import { createBackButton } from './createBackButton.js'

var bdiv = document.querySelector("#body-div");

const showRecords = () => {
    // Saving parent's current children (Menu elements)
    let savedMenu = saveMenuChildren()
    let retrievedData = JSON.parse(localStorage.getItem("records"))
    let data = retrievedData === null ? [] : retrievedData

    // Replacing the prior children
    bdiv.replaceChildren(createTitle("record-title", "Historial de partidas"))
    bdiv.appendChild(createTable(data))
    createBackButton(savedMenu)
};

export default showRecords;