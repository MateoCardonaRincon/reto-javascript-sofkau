import createTitle from "../modules/createTitle.js";
import createButton from "../modules/createButton.js";
import { saveMenuChildren } from "../modules/saveMenuChildren.js";

var bdiv = document.querySelector("#body-div");

const createQuestionForm = () => {
  let savedMenu = saveMenuChildren();

  // Replacing the prior children
  bdiv.replaceChildren(createTitle("record-title", "Añadir nueva pregunta"));
  bdiv.appendChild(createForm());
  createBackButton(savedMenu);
  return 1;
};

const createForm = () => {
  let form = document.createElement("form");
  form.setAttribute("id", "new_form");
  form.setAttribute("class", "form");

  let qu_input = newInput("question_input", "Ingrese la pregunta:", "text");
  let ans_input = newInput(
    "answer_input",
    "Ingrese la respuesta correcta:",
    "text"
  );
  let wrong1 = newInput(
    "wrong_answer_input1",
    "Ingrese una respuesta incorrecta:",
    "text"
  );
  let wrong2 = newInput(
    "wrong_answer_input2",
    "Ingrese una respuesta incorrecta:",
    "text"
  );
  let wrong3 = newInput(
    "wrong_answer_input3",
    "Ingrese una respuesta incorrecta:",
    "text"
  );
  let inputRange = newInput(
    "input_category",
    "Ingrese la categoria (Entre 1 y 5)",
    "range"
  );
  inputRange.min = "1";
  inputRange.max = "5";
  inputRange.step = "1";

  let label = document.createElement("span")
  label.setAttribute("class", "cat-span")
  label.textContent = "Categoría (mín: 1, máx: 5)"

  const submitButm = document.createElement("button");
  submitButm.setAttribute("type", "submit");
  submitButm.setAttribute("class", "buttons");
  submitButm.textContent = "Añadir pregunta";
  submitButm.addEventListener("click", () => {
    loadNewQuestion(qu_input, ans_input, wrong1, wrong2, wrong3, inputRange);
  });

  form.appendChild(qu_input);
  form.appendChild(ans_input);
  form.appendChild(wrong1);
  form.appendChild(wrong2);
  form.appendChild(wrong3);
  form.appendChild(label);
  form.appendChild(inputRange);
  form.appendChild(submitButm);

  return form;
};

const newInput = (id, inputText, inputType) => {
  let nInput = document.createElement("input");
  nInput.setAttribute("placeholder", inputText);
  nInput.setAttribute("id", id);
  nInput.setAttribute("class", "input-form");
  nInput.type = inputType;
  nInput.required = true;
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

const setNewQuestion = (qu, ans, wrng1, wrng2, wrng3) => {
  let newQuestion = {
    id: 6,
    question: qu,
    answers: [
      {
        answer: ans,
        is_correct: true,
      },
      {
        answer: wrng1,
        is_correct: false,
      },
      {
        answer: wrng2,
        is_correct: false,
      },
      {
        answer: wrng3,
        is_correct: false,
      },
    ],
  };
  return newQuestion;
};

const loadNewQuestion = (
  qu_input,
  ans_input,
  wrong1,
  wrong2,
  wrong3,
  inputRange
) => {
  let qu = qu_input.value;
  let ans = ans_input.value;
  let wrng1 = wrong1.value;
  let wrng2 = wrong2.value;
  let wrng3 = wrong3.value;
  let cat = inputRange.value;

  let questions = JSON.parse(localStorage.getItem("QuestionsC" + cat));

  let new_question = setNewQuestion(qu, ans, wrng1, wrng2, wrng3);

  questions.push(new_question);

  localStorage.setItem("QuestionsC" + cat, JSON.stringify(questions));
};

export default createQuestionForm;
