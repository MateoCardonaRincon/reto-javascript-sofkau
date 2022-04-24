import menu from "./views/menu.js";
import QUESTIONS_C1 from "/questions.js";

menu();

localStorage.setItem("QuestionsC1", JSON.stringify(QUESTIONS_C1));
// JSON.parse(localStorage.getItem("Prueba"))
