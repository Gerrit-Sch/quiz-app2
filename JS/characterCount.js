function characterCount() {
  const characterCount = document.querySelector('[data-js=text-addquestion');
  const charactersLeftQuestion = document.querySelector(
    '[data-js=create-amount-add-question]'
  );

  characterCount.addEventListener('input', () => {
    const questionTextLength = characterCount.value.length;
    const maxCharactersAddQuestion = characterCount.value.maxLength;
    charactersLeftQuestion =
      characterCount.value.maxLength - characterCount.value.length;
  });
}

export default characterCount;
