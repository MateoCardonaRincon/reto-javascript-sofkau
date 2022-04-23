import menu from "./views/menu.js";
import {
  questions_c1,
  questions_c2,
  questions_c3,
  questions_c4,
  questions_c5,
} from "./persistencia/questions.js";
import RECORDS from "/records.js";

menu();
//import QUESTIONS_C1 from "/questions.js";

//localStorage.setItem("Prueba", JSON.stringify(QUESTIONS_C1));
localStorage.setItem("Records", JSON.stringify(RECORDS));
// JSON.parse(localStorage.getItem("Prueba"))
