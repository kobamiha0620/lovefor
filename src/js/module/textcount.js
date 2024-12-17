export function countTxt(str, resultid) {
  const textarea = document.getElementById("contact-comment");
  const letters = document.getElementById('js-currentLetters');
  const maxText = 2000;
  // let currentTxt = textarea.innerHTML = str.length;
  textarea.addEventListener('input', function() {
    if (textarea.value.length > maxText) {
      textarea.value = textarea.value.substring(0, maxText);
    }
    const currentLetters = maxText - textarea.value.length;
    letters.innerHTML = currentLetters;
  });
}
