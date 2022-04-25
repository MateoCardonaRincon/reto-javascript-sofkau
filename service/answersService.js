import {
  getQuestionObject,
  getChoice,
  getQuestion,
} from "../model/questionQuery.js";
import { initRound } from "./roundService.js";
import getRandomInt from "./randomInt.js";
import { endGame } from "./gameService.js";

//Show the posible answers to the question
async function showAnswers(index_question, index_round, table, player) {
  for (let index_choice = 0; index_choice < 4; index_choice++) {
    let answ = await getChoice(index_question, index_choice, index_round);
    let row = document.createElement("tr");
    let collum = document.createElement("tb");
    collum.innerHTML = answ;
    row.appendChild(collum);
    row.addEventListener("click", () => {
      let index_question = getRandomInt();
      selectOption(index_question, index_choice, index_round+1, player);
      
    });
    table.appendChild(row);
  }
}

//Check if an answer is correct
async function isCorrect(index_question, index_choice, index_round) {
  let question = await getQuestionObject(index_question, index_round);
  let choices = await question.answers;
  let choice_object = await choices[index_choice];
  let is_correct = await choice_object.is_correct;
  return is_correct;
}

//Select an option for a question
async function selectOption(index_question, index_choice, index_round, player) {
  let isOptionCorrect = await isCorrect(
    index_question,
    index_choice,
    index_round
  );
  if (isOptionCorrect) {
    checkGameWin(player, index_round, index_question);
    
    return 0;
  }

  alert("Lo sentimos respuesta incorrecta. ");
  endGame(player, index_round);
}

//check if the player win the game
let checkGameWin = (player, index_round, index_question) => {
  player.score += index_round * 10000;
  let isLastIndex_round = index_round > 3;
console.log(index_round)
  if (isLastIndex_round) {
    endGame(player, index_round);
    return 0;
  }

  alert("Respuesta Correcta " + player.name + " has ganado $ " + player.score);

  initRound(index_round, player, index_question);
};


export { showAnswers };
