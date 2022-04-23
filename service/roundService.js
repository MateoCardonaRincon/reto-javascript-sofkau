import { getQuestionObject, getChoice, getQuestion } from "../model/questionQuery.js";
import {showAnswers} from "./answersService.js";
// Init a new round of the game
async function initRound(index_round, player, index_question) {
    document.getElementById("body-div").innerHTML = "";
    let question_div = document.createElement("div");
    let answer_div = document.createElement("div");
    let table = document.createElement("table");
  
    question_div.innerHTML = await getQuestion(index_round, index_question);
    showAnswers(index_question, index_round, table, player);
    answer_div.appendChild(table);
  
    document.getElementById("body-div").appendChild(question_div);
    document.getElementById("body-div").appendChild(document.createElement("br"));
    document.getElementById("body-div").appendChild(answer_div);
  }

  export {initRound};