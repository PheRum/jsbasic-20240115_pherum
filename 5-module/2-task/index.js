function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const textElement = document.querySelector('#text');

  button.addEventListener("click", () => {
    textElement.hidden = !textElement.hidden;
  });
}
