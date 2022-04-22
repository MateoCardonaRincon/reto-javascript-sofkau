import showRecords from '../modules/showRecords.js'
import createTitle from "../modules/createTitle.js"
import createButton from "../modules/createButton.js"

const menu = () => {

  document.getElementById("body-div").prepend(createTitle("menu-title", "Menú"))
  //play button
  let playBtn = createButton("playBtn", "Jugar", "body-div");

  // records button
  let recordsBtn = createButton("recordsBtn", "Historial", "body-div");

  // add a question
  let addQuestionBtn = createButton( "addQuestionBtn", "Añadir pregunta", "body-div");

  // events
  playBtn.addEventListener("click", () => {
  });

  recordsBtn.addEventListener("click", () => {
    showRecords();
  });

  addQuestionBtn.addEventListener("click", () => {
  });
};

export default menu;
