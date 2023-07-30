const container = document.querySelector('#container');
const GPAText = document.createElement('p');
const maxScoreText = document.createElement('p');
const minScoreText = document.createElement('p');
const goodScoreText = document.createElement('p');
const negativeScoreText = document.createElement('p');
const scoreText = document.createElement('p');

const grades = [];
grades.push((Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1));

const GPA = grades => grades.reduce((a, b) => a + b) / grades.length;

let grades2 = [...grades];
grades2.sort(function (a, b) {
    return a - b;
});

const maxScore = grades2[grades2.length - 1];

const minScore = grades2[0];

const goodScore = grades.filter(el => el >= 60).length;

const negativeScore = grades.filter(el => el < 60).length;

const score = grades.map(function (item) {
    if (item >= 80 && item <= 100)
        return "A";
    if (item >= 60 && item <= 79)
        return "B";
    if (item >= 40 && item <= 59)
        return "C";
    if (item >= 20 && item <= 39)
        return "D";
    if (item < 20)
        return "E";
});

GPAText.textContent = `Cредний балл студентов: ${GPA(grades)}.`;
maxScoreText.textContent = `Максимальный балл среди студентов: ${maxScore}.`;
minScoreText.textContent = `Минимальный балл среди студентов: ${minScore}.`;
goodScoreText.textContent = `Кол-во учеников, получивших положительную оценку: ${goodScore}.`;
negativeScoreText.textContent = `Кол-во учеников, получивших отрицательную оценку: ${negativeScore}.`;
scoreText.textContent = `Буквенные оценки: ${score}.`;

container.append(GPAText, maxScoreText, minScoreText, goodScoreText, negativeScoreText, scoreText);