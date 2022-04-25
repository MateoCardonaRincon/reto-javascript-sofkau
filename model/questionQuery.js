//Get an object with all the question information
async function getQuestionObject(index, category) {
  let questions;
  switch (category) {
    case 0:
      questions = await JSON.parse(localStorage.getItem("QuestionsC1"));
      break;
    case 1:
      questions = await JSON.parse(localStorage.getItem("QuestionsC2"));
      break;
    case 2:
      questions = await JSON.parse(localStorage.getItem("QuestionsC3"));
      break;
    case 3:
      questions = await JSON.parse(localStorage.getItem("QuestionsC4"));
      break;
    case 4:
      questions = await JSON.parse(localStorage.getItem("QuestionsC5"));
      break;
  }
  let questionObject = await questions[index];

  return questionObject;
}

// get a posible answer for a question
async function getChoice(index_question, index_round) {
  let question = await getQuestionObject(index_question, index_round);
  let choices = await question.answers;
  // let choice_object = await choices[index_choice];
  // let choice = await choice_object.answer;
  return choices;
}

//Get the question
async function getQuestion(index_round, index_question) {
  let questionObject = await getQuestionObject(index_question, index_round);
  let question = await questionObject.question;
  return question;
}

export { getQuestionObject, getChoice, getQuestion };
