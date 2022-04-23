const createTitle = (id, text) => {
    let title = document.createElement("h1")
    title.setAttribute("class", "title")
    title.setAttribute("id", "id")
    title.textContent = text
    return title
}

export default createTitle;