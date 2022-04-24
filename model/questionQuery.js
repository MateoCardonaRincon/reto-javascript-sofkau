//Get an object with all the question information
async function getQuestionObject(index) {
    let questions = await JSON.parse(localStorage.getItem("QuestionsC1"));
    let questionObject = await questions[index];
  
    return questionObject;
  }

// get a posible answer for a question
async function getChoice(index_question, index_choice) {
    let question = await getQuestionObject(index_question);
    let choices = await question.answers;
    let choice_object = await choices[index_choice];
    let choice = await choice_object.answer;
    return choice;
  }

//Get the question
async function getQuestion(index_round, index_question) {
    let questionObject = await getQuestionObject(index_question);
    let question = await questionObject.question;
    return  question;
  }
  
export {getQuestionObject, getChoice, getQuestion }