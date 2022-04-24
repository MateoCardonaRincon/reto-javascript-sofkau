import menu from "./views/menu.js";
import QUESTIONS_C1 from "/questions.js";
import RECORDS from "/records.js";

menu();

localStorage.setItem("Prueba", JSON.stringify(QUESTIONS_C1));
localStorage.setItem("Records", JSON.stringify(RECORDS));
// JSON.parse(localStorage.getItem("Prueba"))
