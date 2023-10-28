import { questions } from "../Data/questions.js";

const selectQuestion = (categoryParam) => {

    let currentlyDisplayedQuestions = JSON.parse(localStorage.getItem('displayedQuestions')) || [];
    let gameMode
    
    if(!categoryParam) {
        gameMode = JSON.parse(localStorage.getItem('gameMode')) || "shuffle"
    } else {
        localStorage.setItem('gameMode', JSON.stringify(categoryParam));
        gameMode = categoryParam;
    }

    let possibilitiesArray = questions.filter((questions) => !currentlyDisplayedQuestions.includes(questions.id))

    if(gameMode !== "shuffle"){
        possibilitiesArray = possibilitiesArray.filter((questions) => questions.category === gameMode)
    }

    if(possibilitiesArray.length > 0) {
        let nextIndex = Math.floor(Math.random() * possibilitiesArray.length)

        let nextQuestion = possibilitiesArray[nextIndex];

        localStorage.setItem('selectedQuestion', JSON.stringify(nextQuestion));
        currentlyDisplayedQuestions.push(nextQuestion.id)

        localStorage.setItem('displayedQuestions', JSON.stringify(currentlyDisplayedQuestions));

        return nextQuestion;
    } else {
        if(confirm("Glückwunsch. Ihr habt alle Fragen gespielt")) {
            localStorage.setItem('displayedQuestions', JSON.stringify([]));
            location.href = "index.html";
        }
    }
};

export default selectQuestion;