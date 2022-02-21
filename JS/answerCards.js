function answerCards() {
  const answerCard = document.querySelector('[data-js="answer-button"]');
  const answerText = document.querySelector('[data-js="answer-text"]');
  const isAnswerHidden = true;

  answerCard.addEventListener('click', () => {
    answerCard.textContent = 'HIDE ANSWER';
    answerText.classList.remove('hidden');

    if (isAnswerHidden) {
      answerCard.textContent = 'SHOW ANSWER';
      isAnswerHidden = true;
    } else {
      answerCard.textContent = 'HIDE ANSWER';
      isAnswerHidden = false;
    }
  });
}
export default answerCards;
