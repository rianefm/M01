// Array de perguntas (simplificado para o exemplo)
const questions = [
    {
        question: 'O que significa a sigla "CO2"?',
        answers: [
            { text: 'Clorofluorcarbono', correct: false },
            { text: 'Cloro e oxigênio', correct: false },
            { text: 'Dióxido de carbono', correct: true },
            { text: 'Monóxido de carbono', correct: false }
        ]
    }
];

// Variáveis de controle
let currentQuestionIndex = 0;
const nextQuestionButton = document.getElementById('next-question');
const answerElements = document.querySelectorAll('ul li');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModalButton = document.getElementById('close-modal');

// Função que verifica a resposta
function selectAnswer(event) {
    const selectedAnswer = event.target;
    const isCorrect = selectedAnswer.getAttribute('data-answer') === 'correct';

    if (isCorrect) {
        selectedAnswer.style.backgroundColor = '#28A745'; // Verde para resposta correta
        nextQuestionButton.style.display = 'block'; // Exibe o botão para a próxima pergunta
    } else {
        selectedAnswer.style.backgroundColor = '#FF0000'; // Vermelho para resposta errada
        showModal('Resposta errada! Você voltará ao início.');
    }
}

// Função para exibir o modal
function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

// Função para fechar o modal
closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
    resetQuiz();
});

// Função para carregar a próxima pergunta
function loadNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Exemplo de lógica para carregar a próxima pergunta
        alert('Próxima pergunta!'); // Substitua por lógica de atualização do DOM
        nextQuestionButton.style.display = 'none'; // Esconde o botão
    } else {
        showModal('Você completou o quiz! Parabéns!');
    }
}

// Função para reiniciar o quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    nextQuestionButton.style.display = 'none';
    answerElements.forEach(answer => answer.style.backgroundColor = '#f1f1f1'); // Reset das cores
}

// Adiciona eventos de clique nas respostas
answerElements.forEach(answer => {
    answer.addEventListener('click', selectAnswer);
});

// Evento de clique para o botão de próxima pergunta
nextQuestionButton.addEventListener('click', loadNextQuestion);
