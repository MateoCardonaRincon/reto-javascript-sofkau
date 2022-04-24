var bdiv = document.querySelector("#body-div");

const saveMenuChildren = () => {
    let menuChildren = {};
    let children = bdiv.children
    for (var i = 1; children.length >= i; i++) {
        menuChildren["child" + i] = children[i - 1]
    }
    return menuChildren
}

export { saveMenuChildren }