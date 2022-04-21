
const createButton = (id, value, position) => {
  let thisBtn = document.createElement("input");
  thisBtn.setAttribute("type", "button");
  thisBtn.setAttribute("id", id);
  thisBtn.setAttribute("value", value);
  document.getElementById(position).appendChild(thisBtn);
};

const menu = () => {
  //play button
  createButton("playBtn", "Jugar", "top")

  // records button
  createButton("recordsBtn", "Historial", "middle")

  // add a question
  createButton("addQuestionBtn", "Añadir pregunta", "bottom")

  // events
  // playBtn.addEventListener("click", () => {
  //   console.log("Jugar");
  // });

  // recordsBtn.addEventListener("click", () => {
  //   console.log("Historial");
  // });

  // addQuestionBtn.addEventListener("click", () => {
  //   console.log("Agregar preguntas");
  // });
};

export default menu;
