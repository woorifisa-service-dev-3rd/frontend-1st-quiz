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

document.addEventListener('DOMContentLoaded', function() {
    const quizButton = document.querySelector('.quiz-button');

    quizButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        window.location.href = 'quiz.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain');
    document.body.appendChild(rainContainer);

    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        rainContainer.appendChild(drop);
    }
});