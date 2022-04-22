import showRecords from '../modules/showRecords.js'

const createButton = (id, value, position) => {
  let thisBtn = document.createElement("input");
  thisBtn.setAttribute("type", "button");
  thisBtn.setAttribute("id", id);
  thisBtn.setAttribute("value", value);
  document.getElementById(position).appendChild(thisBtn);
  return thisBtn;
};

const menu = () => {
  //play button
  let playBtn = createButton("playBtn", "Jugar", "top");

  // records button
  let recordsBtn = createButton("recordsBtn", "Historial", "middle");

  // add a question
  let addQuestionBtn = createButton( "addQuestionBtn", "Añadir pregunta", "bottom");

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
