


let  game_init=async ()=>{
    let btn_init_game=document.createElement("input")
    let name_input=document.createElement("input")
    let level=0
    
  

    //Set btn init atrributes
    btn_init_game.setAttribute("type", "button")
    btn_init_game.setAttribute("value", "iniciar el juego")

    //Set  name input
    name_input.type="text"
    name_input.placeholder="nombre jugador"

    //init the round
    btn_init_game.addEventListener("click", ()=>{

            initRound(level);
            level++
        })
    
    
    
    
    document.getElementById("top").appendChild(name_input)
    document.getElementById("top").appendChild(btn_init_game)

    

}
async function getQuestionObject(index){
    let questions=await JSON.parse(localStorage.getItem("Questions"));
    let question=await questions[index]

    return  question

    
}
async function getQuestion(index){
    let questionObject=await getQuestionObject(index);
    let question=await questionObject.question

    return  question

    
}
async function initRound(index_round){
    document.getElementById("middle").innerHTML=""
    let question_div=document.createElement("div")
    let answer_div=document.createElement("div")
    //add data to the body of the table
    let table=document.createElement('table');

    //set question
    question_div.innerHTML=  await getQuestion(index_round)
    
    //set posible answer to the question
    for( let index=0; index<4; index++){
        let answ=await getChoise(0,index);
        let row=document.createElement("tr")
        let collum= document.createElement("tb")
        collum.innerHTML =answ
        row.appendChild(collum)
        row.addEventListener("click", chechAnswer)
        table.appendChild(row)
    }
    answer_div.appendChild(table)

    document.getElementById("middle").appendChild(question_div)
    document.getElementById("middle").appendChild(document.createElement("b"))
    document.getElementById("middle").appendChild(answer_div)


    
}

async function  getChoise(index_question, index_choice){
    let question=await getQuestionObject(index_question);
    let choices=await question.answers;
    let choice_object=await choices[index_choice]
    let choice=await choice_object.answer

    return choice
    
}

function chechAnswer(){
    console.log("check")

}

export default game_init;