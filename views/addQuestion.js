import createTitle from "../modules/createTitle.js";
import createButton from "../modules/createButton.js";

var bdiv = document.querySelector("#body-div");

const createQuestionForm = () => {
  let savedMenu = saveMenuChildren();

  // Replacing the prior children
  bdiv.replaceChildren(createTitle("record-title", "Historial de partidas"));
  createBackButton(savedMenu);
  return 1;
};

const saveMenuChildren = () => {
  let menuChildren = {};
  let children = bdiv.children;
  for (var i = 1; children.length >= i; i++) {
    menuChildren["child" + i] = children[i - 1];
  }
  return menuChildren;
};

const createBackButton = (savedMenu) => {
  let backBtn = createButton("backBtn", "Volver al menú", "body-div");

  backBtn.addEventListener("click", () => {
    bdiv.replaceChildren(savedMenu.child1);
    bdiv.appendChild(savedMenu.child2);
    bdiv.appendChild(savedMenu.child3);
    bdiv.appendChild(savedMenu.child4);
  });
  return backBtn;
};

export default createQuestionForm;
