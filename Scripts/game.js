import selectQuestion from "./selectQuestion.js";

let questionContainerHTML = '';

function renderQuestion() {

    const selectedQuestion = JSON.parse(localStorage.getItem('selectedQuestion')) || {};
    console.log("selectedQuestion", selectedQuestion)

    questionContainerHTML = ` 
    <div class="question-container question-container-${selectedQuestion.category}">
        <p class="question-type">${selectedQuestion.category}</p>
        <p class="question-text">${selectedQuestion.question}</p>
    </div>
    <button class="next-question-btn">Nächste Frage</button>
    `;
    document.querySelector('.wrapper-game').innerHTML = questionContainerHTML;

    document.querySelector('.next-question-btn').addEventListener('click', (event) => {
        selectQuestion();
        renderQuestion();
    });
};

renderQuestion();

document.querySelector('.navbar-icon-home').addEventListener('click', ()=>{
    localStorage.setItem('displayedQuestions', JSON.stringify([]));
    location.href = "index.html";
});


// DAS IST MEIN ALTER CODE


/*

import { questions } from "../Data/questions.js";
import { selectedQuestionArray } from "../Data/selectedQuestion.js";
import { displayedQuestionsArray } from "../Data/displayedQuestions.js";

console.log(displayedQuestionsArray);


let startingCategory;
let shuffleMode;

selectedQuestionArray.forEach((question)=>{
    startingCategory = question.category;
})

selectedQuestionArray.forEach((question)=> {
    if (question.shuffle === true) {
        shuffleMode = true;
    }
})

let questionContainerHTML = '';

function renderQuestion() {
    questionContainerHTML = '';
    selectedQuestionArray.forEach((questions) => {

        questionContainerHTML += ` 
        <div class="question-container question-container-${questions.category}">
            <p class="question-type">${questions.category}</p>
            <p class="question-text">${questions.question}</p>
        </div>
        <button class="nächste-frage-btn">Nächste Frage</button>
        `;
    })

    document.querySelector('.wrapper-game').innerHTML = questionContainerHTML;
};

document.querySelector('.wrapper-game').addEventListener('click', () => {

    if (event.target.classList.contains('nächste-frage-btn')) {
        selectQuestion(startingCategory);
        renderQuestion();
        console.log(selectedQuestionArray);
        console.log('click')
    }
    
});

function selectQuestion(categoryParam){
    let selectedQuestion;
    let randomNumber;

    if (shuffleMode === true) {
        randomNumber = Math.floor(Math.random() * questions.length);
        selectedQuestion = questions[randomNumber].question;
    } else {

        do {
            randomNumber = Math.floor(Math.random() * questions.length);
            selectedQuestion = questions[randomNumber].question;
        } while (questions[randomNumber].category !== categoryParam);

    }

    selectedQuestionArray.splice(0, selectedQuestionArray.length);

    selectedQuestionArray.push({
        category: questions[randomNumber].category,
        question: selectedQuestion,
        shuffle: shuffleMode
    })

    return selectedQuestionArray;
};

document.querySelector('.navbar-icon-home').addEventListener('click', ()=>{
    displayedQuestionsArray.splice(0, displayedQuestionsArray.length);
    localStorage.setItem('displayedQuestionsArray', JSON.stringify(displayedQuestionsArray));
    location.href = "index.html"; 
});

renderQuestion();

*/