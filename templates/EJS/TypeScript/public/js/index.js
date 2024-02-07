const writeText = (text, tag) => {
  const length = text.length;
  for (let i = 0; i < length; i++) {
    setTimeout(() => {
      tag.innerHTML = text.charAt(i);
    }, 1000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const greet = document.getElementById("greet");
  writeText(greet.textContent, greet);
});
