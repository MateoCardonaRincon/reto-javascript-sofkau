import createTitle from "../modules/createTitle.js";
import createButton from "../modules/createButton.js";

var bdiv = document.querySelector("#body-div");

const createQuestionForm = () => {
  let savedMenu = saveMenuChildren();

  // Replacing the prior children
  bdiv.replaceChildren(createTitle("record-title", "Añadir nueva pregunta"));
  bdiv.appendChild(createForm());
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

const createForm = () => {
  let form = document.createElement("form");

  form.appendChild(newInput("question_input", "Ingrese la pregunta:", "text"));
  form.appendChild(
    newInput("answer_input", "Ingrese la respuesta correcta:", "text")
  );
  form.appendChild(
    newInput("wrong_answer_input1", "Ingrese una respuesta incorrecta:", "text")
  );
  form.appendChild(
    newInput("wrong_answer_input2", "Ingrese una respuesta incorrecta:", "text")
  );
  form.appendChild(
    newInput("wrong_answer_input3", "Ingrese una respuesta incorrecta:", "text")
  );

  return form;
};

const newInput = (id, inputText, inputType) => {
  let newInput = document.createElement("div");
  newInput.setAttribute("id", id);

  let inputTitle = document.createElement("h6");
  inputTitle.setAttribute("class", "title");
  inputTitle.textContent = inputText;

  let nInput = document.createElement("input");
  nInput.type = inputType;
  nInput.required = true;

  newInput.appendChild(inputTitle);
  newInput.appendChild(nInput);

  return newInput;
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
