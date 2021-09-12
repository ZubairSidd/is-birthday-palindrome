const dateInput = document.querySelector("#dateInput");
const checkButton = document.querySelector("#checkButton");

const answer = document.querySelector("#answer");

const checkButtonHandler = () => {
  console.log(dateInput.value.split("-"));
};

checkButton.addEventListener("click", checkButtonHandler);
