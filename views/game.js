import {getQuestionObject, getChoice, getQuestion } from "./questionQuery.js"

let game_init = async () => {
  let btn_init_game = document.createElement("input");
  let name_input = document.createElement("input");

  //Set btn init atrributes
  btn_init_game.setAttribute("type", "button");
  btn_init_game.setAttribute("value", "iniciar el juego");

  //Set  name input
  name_input.type = "text";
  name_input.placeholder = "nombre jugador";

  //init the round
  btn_init_game.addEventListener("click", () => {
    initRound(0);
  });

  document.getElementById("top").appendChild(name_input);
  document.getElementById("top").appendChild(btn_init_game);
};



// Init a new round
async function initRound(index_round) {
  document.getElementById("middle").innerHTML = "";
  let question_div = document.createElement("div");
  let answer_div = document.createElement("div");
  let table = document.createElement("table");

  //generate a random index of a question
  let index_question = getRandomInt(0, 3);

  //set a question
  question_div.innerHTML = await getQuestion(index_round, index_question);

  //set posible answer to the question
  for (let index_choice = 0; index_choice < 4; index_choice++) {
    let answ = await getChoice(index_question, index_choice);
    let row = document.createElement("tr");
    let collum = document.createElement("tb");
    collum.innerHTML = answ;
    row.appendChild(collum);
    row.addEventListener("click", () =>
      checkAnswer(index_question, index_choice, index_round + 1)
    );
    table.appendChild(row);
  }
  answer_div.appendChild(table);

  document.getElementById("middle").appendChild(question_div);
  document.getElementById("middle").appendChild(document.createElement("br"));
  document.getElementById("middle").appendChild(answer_div);
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
async function checkAnswer(index_question, index_choice, level) {
  let answer = await isCorrect(index_question, index_choice);
  if (answer) {
    console.log("check");
    initRound(level);
  }
}

//Get a random int between two numbers.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default game_init;
