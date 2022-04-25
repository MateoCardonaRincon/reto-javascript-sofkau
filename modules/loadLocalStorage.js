import {
    questions_c1,
    questions_c2,
    questions_c3,
    questions_c4,
    questions_c5,
} from "../persistencia/questions.js";

const loadLocalStorage = () => {
    if (JSON.parse(localStorage.getItem("QuestionsC1")) === null) {
        localStorage.setItem("QuestionsC1", JSON.stringify(questions_c1));
    }
    if (JSON.parse(localStorage.getItem("QuestionsC2")) === null) {
        localStorage.setItem("QuestionsC2", JSON.stringify(questions_c2));
    }
    if (JSON.parse(localStorage.getItem("QuestionsC3")) === null) {
        localStorage.setItem("QuestionsC3", JSON.stringify(questions_c3));
    }
    if (JSON.parse(localStorage.getItem("QuestionsC4")) === null) {
        localStorage.setItem("QuestionsC4", JSON.stringify(questions_c4));
    }
    if (JSON.parse(localStorage.getItem("QuestionsC5")) === null) {
        localStorage.setItem("QuestionsC5", JSON.stringify(questions_c5));
    }
}

export { loadLocalStorage }