import { getQuestion } from "../model/questionQuery.js";
import {showAnswers} from "./answersService.js";
import {leaveGame} from "./gameService.js"

// Init a new round of the game
async function initRound(index_round, player, index_question) {
    let question_div = document.createElement("div")
    let answer_div = document.createElement("div")
    let table = document.createElement("table")
    let btn_leave_game = document.createElement("input");

    document.getElementById("body-div").innerHTML = `<h1>Bienvenido ${player.name}</h1>`
  
    question_div.innerHTML = await getQuestion(index_round, index_question)
    showAnswers(index_question, index_round, table, player)
    answer_div.appendChild(table)


  btn_leave_game.type = "button";
  btn_leave_game.value = "abandonar juego";
  
  btn_leave_game.addEventListener("click",()=> leaveGame(player))
  
  
    document.getElementById("body-div").appendChild(question_div)
    document.getElementById("body-div").appendChild(answer_div)
    document.getElementById("body-div").appendChild(btn_leave_game);
  }

  export {initRound};