let count_button = document.getElementById("count-button");
let count_text = document.getElementById("count-text");
let reset_button = document.getElementById("reset-button");

count_button.addEventListener("click", () => {
  let count = parseInt(count_text.textContent);
  count++;
  count_text.innerHTML = count;
});

reset_button.addEventListener("click", () => {
  count_text.innerHTML = "0";
});
