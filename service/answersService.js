import { getQuestionObject, getChoice, getQuestion } from "../model/questionQuery.js";
import {initRound} from "./roundService.js"
import getRandomInt from "./randomInt.js"
//show the posible answers to the question
async function showAnswers(index_question, index_round, table, player) {
    for (let index_choice = 0; index_choice < 4; index_choice++) {
      let answ = await getChoice(index_question, index_choice);
      let row = document.createElement("tr");
      let collum = document.createElement("tb");
      collum.innerHTML = answ;
      row.appendChild(collum);
      row.addEventListener("click", () =>{
        let index_question=getRandomInt()
        checkAnswer(index_question, index_choice, index_round + 1, player)
      });
      table.appendChild(row);
    }
  }
  
  // check if an answer is correct
  async function isCorrect(index_question, index_choice) {
    let question = await getQuestionObject(index_question);
    let choices = await question.answers;
    let choice_object = await choices[index_choice];
    let is_correct = await choice_object.is_correct;
    return is_correct;
  }
  
  //check if an answer is correct for a question
  async function checkAnswer(index_question, index_choice, level, player) {
    let answer = await isCorrect(index_question, index_choice);
    if (answer) {
      console.log("check");
      initRound(level,player, index_question);
    }
  }
  
  export {showAnswers}

