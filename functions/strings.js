export const cleanString = (string) => {
  let arr = Array.from(string.split(""));
  for (let i = 0; i < 5; i++) {
    arr.shift();
    arr.pop();
  }
  return arr.join("");
};
