import { initRound } from "./roundService.js";
import getRandomInt from "./randomInt.js";
import savePlayer from '../model/playerQuery.js';


// Init a new game for a player
let game_init = async  () => {
  document.getElementById("body-div").innerHTML = " ";

  let player = {
    name: " ",
    score: 0,
  };

  let btn_init_game = document.createElement("input");
  btn_init_game.setAttribute("class", "buttons");
  let name_input = document.createElement("input");


  btn_init_game.type = "button";
  btn_init_game.value = "iniciar el juego";

  name_input.type = "text";
  name_input.placeholder = "nombre jugador";


  btn_init_game.addEventListener("click",()=> OnInitGameBtn(player,name_input))

    

  
  document.getElementById("body-div").style.backgroundColor = "white";
  document.getElementById("body-div").appendChild(name_input);
  document.getElementById("body-div").appendChild(btn_init_game);

};

//click event to the btn init game: init the game.
function OnInitGameBtn (player,name_input){
  player.name = name_input.value;
    let index_question = getRandomInt();
    initRound(0, player, index_question);  
  };

async function endGame(player, level) {
  if (level > 4) {
     savePlayer(player)
     alert("Felicitaciones has ganado el juego")
    
  }
   game_init()
}

function leaveGame(player){
  savePlayer(player)
  game_init()

}

export { game_init, endGame, leaveGame };
