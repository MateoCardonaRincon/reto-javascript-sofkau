import showRecords from "../modules/showRecords.js";
import createQuestionForm from "./addQuestion.js";
import createTitle from "../modules/createTitle.js";
import createButton from "../modules/createButton.js";
import { game_init } from "../service/gameService.js";

var bdiv = document.querySelector("#body-div");

const menu = () => {

  bdiv.replaceChildren(createTitle("menu-title", "Menú"));
  //play button
  let playBtn = createButton("playBtn", "Jugar", "body-div");

  // records button
  let recordsBtn = createButton("recordsBtn", "Historial", "body-div");

  // add a question
  let addQuestionBtn = createButton(
    "addQuestionBtn",
    "Añadir pregunta",
    "body-div"
  );

  playBtn.addEventListener("click", () => {
    game_init()
  });

  recordsBtn.addEventListener("click", () => {
    showRecords();
  });

  addQuestionBtn.addEventListener("click", () => {
    createQuestionForm();
  });
};

export default menu;
