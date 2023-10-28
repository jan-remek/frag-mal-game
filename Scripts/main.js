import { questions } from "../Data/questions.js";
import selectQuestion from "./selectQuestion.js";


const modeBtns = [
    {
        el: document.querySelector('.deep-btn'),
        type: "deep"
    },
    {
        el: document.querySelector('.spicy-btn'),
        type: "spicy"
    },
    {
        el: document.querySelector('.fun-btn'),
        type: "fun"
    },
    {
        el: document.querySelector('.shuffle-btn'),
        type: "shuffle"
    }
]

modeBtns.forEach((btn) => {
    btn.el.addEventListener('click', () => {
        console.log('click')
        selectQuestion(btn.type)
        location.href = "game.html";
    })
})



// Das hier ist mein alter Code

/*

import { selectedQuestionArray } from "../Data/selectedQuestion.js";
import { displayedQuestionsArray } from "../Data/displayedQuestions.js";


const deepButton = document.querySelector('.deep-btn');
const spiceyButton = document.querySelector('.spicey-btn');
const funButton = document.querySelector('.fun-btn');
const shuffleButton = document.querySelector('.shuffle-btn');


deepButton.addEventListener('click', () => {

    selectQuestion('deep');
    localStorage.setItem('selectedQuestionArray', JSON.stringify(selectedQuestionArray));
    location.href = "game.html"; 

});

spiceyButton.addEventListener('click', () => {
    selectQuestion('spicey');
    localStorage.setItem('selectedQuestionArray', JSON.stringify(selectedQuestionArray));
    location.href = "game.html"; 
});

funButton.addEventListener('click', () => {
    selectQuestion('fun');
    localStorage.setItem('selectedQuestionArray', JSON.stringify(selectedQuestionArray));
    location.href = "game.html"; 
});

shuffleButton.addEventListener('click', () => {
    selectQuestion('shuffle');
    localStorage.setItem('selectedQuestionArray', JSON.stringify(selectedQuestionArray));
    location.href = "game.html";
});

function selectQuestion(categoryParam){
    let selectedQuestion;
    let randomNumber;
    let shuffleMode;

    if (categoryParam === 'shuffle') {
        randomNumber = Math.floor(Math.random() * questions.length);
        selectedQuestion = questions[randomNumber].question;
        shuffleMode = true;

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

    displayedQuestionsArray.push(
        questions[randomNumber].id
    )

    localStorage.setItem('displayedQuestionsArray', JSON.stringify(displayedQuestionsArray));

    return selectedQuestionArray;
};

*/
