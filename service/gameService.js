import {initRound } from "./roundService.js"
import getRandomInt from "./randomInt.js"
// Init a new game for a player
let game_init = async () => {


  let player = {
    name: "luis",
    score: 0,
  };
  console.log("hh")
  document.getElementById("body-div").style.backgroundColor = "white";
  let btn_init_game = document.createElement("input");
  let name_input = document.createElement("input");

  btn_init_game.setAttribute("type", "button");
  btn_init_game.setAttribute("value", "iniciar el juego");

  name_input.type = "text";
  name_input.placeholder = "nombre jugador";
  let name = await name_input.value;

  addEventListenerInitgameBtn(btn_init_game,player);

  document.getElementById("body-div").appendChild(name_input);
  document.getElementById("body-div").appendChild(btn_init_game);
};
//add event listener to the btn init game

let addEventListenerInitgameBtn=(btn_init_game,player)=>btn_init_game.addEventListener("click", () => {
    let index_question = getRandomInt();
    initRound(0, player,index_question);
  });




export { game_init};