import createButton from "./createButton.js"
var bdiv = document.querySelector("#body-div");

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

export { createBackButton };