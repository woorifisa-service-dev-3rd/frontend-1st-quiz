// 퀴즈 데이터 배열
const quizData = [
    {
        question: "다음 중 프로그래밍 언어가 아닌 것은?",
        options: ["Python", "Java", "HTML", "CSS"],
        answer: "HTML"
    },
    {
        question: "JavaScript의 창시자는 누구인가요?",
        options: ["Brendan Eich", "Tim Berners-Lee", "Larry Page", "Bill Gates"],
        answer: "Brendan Eich"
    },
    {
        question: "WWW(World Wide Web)의 창시자는 누구인가요?",
        options: ["Tim Berners-Lee", "Larry Page", "Mark Zuckerberg", "Jeff Bezos"],
        answer: "Tim Berners-Lee"
    }
];

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

// 퀴즈 초기화 함수
function initializeQuiz() {
    showQuestion();
}

// 문제를 화면에 보여주는 함수
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = ''; // 기존의 선택지 초기화

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-button', 'quiz-button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', function() {
            handleAnswer(option);
        });
        optionsContainer.appendChild(optionButton);
    });
}

// 사용자가 선택한 답을 처리하는 함수
function handleAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++; // 정답일 경우 점수 증가
    }

    // 다음 문제로 넘어감
    currentQuestionIndex++;

    // 모든 문제를 다 풀었을 경우 결과 페이지로 이동
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 결과를 보여주는 함수
function showResult() {
    quizContainer.innerHTML = `
        <h2>퀴즈가 종료되었습니다!</h2>
        <p>당신의 점수는 ${score}점 입니다.</p>
        <button onclick="window.location.reload()" class="quiz-button">다시 풀기</button>
    `;
}

// 다음 문제 버튼 클릭 시
nextButton.addEventListener('click', function() {
    showQuestion();
});

// 퀴즈 초기화
initializeQuiz();