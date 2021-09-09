const dateInput = document.querySelector("#dateInput");
const checkButton = document.querySelector("#checkButton");

const answer = document.querySelector("#answer");

const checkButtonHandler = () => {
  console.dir(dateInput);
};

checkButton.addEventListener("click", checkButtonHandler);
