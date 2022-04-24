import menu from "./views/menu.js";
import {
    questions_c1,
    questions_c2,
    questions_c3,
    questions_c4,
    questions_c5,
} from "./persistencia/questions.js";

localStorage.setItem("QuestionsC1", JSON.stringify(questions_c1));
localStorage.setItem("QuestionsC2", JSON.stringify(questions_c2));
localStorage.setItem("QuestionsC3", JSON.stringify(questions_c3));
localStorage.setItem("QuestionsC4", JSON.stringify(questions_c4));
localStorage.setItem("QuestionsC5", JSON.stringify(questions_c5));

menu();

