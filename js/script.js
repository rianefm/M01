
const questionPages = [
    'html/perguntaUm.html',
    'html/perguntaDois.html',
    'html/perguntaTres.html',
    'html/perguntaQuatro.html',
    'html/perguntaCinco.html'
];


let currentQuestionIndex = 0;
const nextQuestionButton = document.getElementById('next-question');
const answerElements = document.querySelectorAll('ul li');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModalButton = document.getElementById('close-modal');


function selectAnswer(event) {
    const selectedAnswer = event.target;
    const isCorrect = selectedAnswer.getAttribute('data-answer') === 'correct';

    if (isCorrect) {
        selectedAnswer.style.backgroundColor = '#28A745';
        nextQuestionButton.style.display = 'block';
    } else {
        selectedAnswer.style.backgroundColor = '#FF0000';
        showModal('Resposta errada! Você voltará ao início.');
    }
}


function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'block';


    setTimeout(function () {
        window.location.href = '../index.html';
    }, 3000);
}


closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
    resetQuiz();
});


function loadNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        alert('Próxima pergunta!');
        nextQuestionButton.style.display = 'none';
    } else {
        showModal('Você completou o quiz! Parabéns!');
    }
}


function resetQuiz() {
    currentQuestionIndex = 0;
    nextQuestionButton.style.display = 'none';
    answerElements.forEach(answer => answer.style.backgroundColor = '#f1f1f1');
}


answerElements.forEach(answer => {
    answer.addEventListener('click', selectAnswer);
});


nextQuestionButton.addEventListener('click', loadNextQuestion);
