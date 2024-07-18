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

// DOM 로딩 후 실행
document.addEventListener('DOMContentLoaded', function() {
    const quizButton = document.querySelector('.quiz-button');

    // 퀴즈 페이지로 이동 시
    quizButton.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 동작 방지

        // 퀴즈 페이지로 이동
        window.location.href = 'quiz.html';
    });
});