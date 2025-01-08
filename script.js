const form = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const score = calculateScore();
  displayResult(score);
});

function calculateScore() {
  const questions = [
    'foreign-aid',
    'debt-dependence',
    'foreign-corporations',
    'currency-vulnerability',
    'export-import',
    'land-ownership',
    'foreign-interference',
    'domestic-policy',
    'language-culture',
    'military-bases',
    'bilateral-agreements',
    'local-governance',
    'education-systems',
    'healthcare-dependency',
    'cultural-erosion',
    'media-ownership'
  ];

  let totalScore = 0;
  questions.forEach((question) => {
    const radios = document.getElementsByName(question);
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        totalScore += parseInt(radios[i].value);
        break;
      }
    }
  });

  return totalScore;
}

function displayResult(score) {
  const maxScore = 61;
  const percentage = (score / maxScore) * 100;

  if (percentage > 60) {
    resultDiv.innerHTML = `The country is likely a neo-colony, with significant economic, political, and cultural influence from foreign powers. Score: ${score} (${percentage.toFixed(2)}%)`;
  } else if (percentage > 40) {
    resultDiv.innerHTML = `The country shows some signs of neocolonialism, but has some degree of autonomy and independence. Score: ${score} (${percentage.toFixed(2)}%)`;
  } else {
    resultDiv.innerHTML = `The country is likely not a neo-colony, with a high degree of autonomy and independence. Score: ${score} (${percentage.toFixed(2)}%)`;
  }
}