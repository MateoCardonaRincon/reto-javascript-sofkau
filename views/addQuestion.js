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
  form.setAttribute("id", "new_form");

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
  const inputRange = newInput(
    "input_category",
    "Ingrese la categoria (Entre 1 y 5)",
    "range"
  );
  inputRange.type = "range";
  inputRange.min = "1";
  inputRange.max = "5";
  inputRange.step = "1";
  form.appendChild(inputRange);

  const submitButm = document.createElement("button");
  submitButm.setAttribute("type", "submit");
  submitButm.textContent = "Add question";

  const frmLogin = form;
  frmLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    console.log(e);
  });

  form.appendChild(submitButm);

  // var categoryValue = document
  //   .getElementById("input_category")
  //   .getAttribute("value");
  // console.log(categoryValue);

  // JSON.parse(
  //   localStorage.getItem(
  //     "QuestionsC" +
  //   )
  // );

  //let newQuestion = {};
  return form;
};

const newInput = (id, inputText, inputType) => {
  // let inputTitle = document.createElement("h6");
  // inputTitle.setAttribute("class", "title");
  // inputTitle.textContent = inputText;

  let nInput = document.createElement("input");
  nInput.setAttribute("id", id);
  nInput.type = inputType;
  nInput.required = true;

  //newInput.appendChild(inputTitle);
  //newInput.appendChild(nInput);

  return nInput;
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
