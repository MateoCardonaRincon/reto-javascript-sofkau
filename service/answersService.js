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
    let answ = await getChoice(index_question, index_choice);
    let row = document.createElement("tr");
    let collum = document.createElement("tb");
    collum.innerHTML = answ;
    row.appendChild(collum);
    row.addEventListener("click", () => {
      let index_question = getRandomInt();
      selectOption(index_question, index_choice, index_round + 1, player);
    });
    table.appendChild(row);
  }
}

//Check if an answer is correct
async function isCorrect(index_question, index_choice) {
  let question = await getQuestionObject(index_question);
  let choices = await question.answers;
  let choice_object = await choices[index_choice];
  let is_correct = await choice_object.is_correct;
  return is_correct;
}

//Select an option for a question
async function selectOption(index_question, index_choice, level, player) {
  let isOptionCorrect = await isCorrect(index_question, index_choice);
  if (isOptionCorrect) {
    checkGameWin(player, level, index_question);
    return 0;
  }

  alert("Lo sentimos respuesta incorrecta. ");
  endGame(player, level);
}

//check if the player win the game
let checkGameWin = (player, level, index_question) => {
  player.score += level * 10000;
  let isLastLevel=level > 4

  if (isLastLevel) {
    endGame(player, level);
    return 0
  }

  alert("Respuesta Correcta " + player.name + " has ganado $ " + player.score);

  initRound(level, player, index_question);
};

let notGameWon = () => {};

export { showAnswers };
