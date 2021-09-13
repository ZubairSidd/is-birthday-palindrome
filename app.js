const dateInput = document.querySelector("#dateInput");
const checkButton = document.querySelector("#checkButton");

const answer = document.querySelector("#answer");

// const checkButtonHandler = () => {
//   const bdValue = dateInput.value.split("-").join("");
//   const bdValueReverse = bdValue.split("").reverse().join("");
//   answer.innerText = `${bdValue} ${bdValueReverse}`;
// };

// checkButton.addEventListener("click", checkButtonHandler);

const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

const isPalindrome = (str) => {
  return str === reverseStr(str);
};

const dt = {
  day: 2,
  month: 11,
  year: 2020,
};

const dateToString = (date) => {
  const dateStr = { day: "", month: "", year: "" };
  dateStr.day = date.day.toString();
  dateStr.month = date.month.toString();
  dateStr.year = date.year.toString();

  if (date.day < 10) dateStr.day = "0" + date.day.toString();
  if (date.month < 10) dateStr.month = "0" + date.month.toString();
  return dateStr;
};

const getAllDates = (date) => {
  const dateStr = dateToString(date);
  let { day, month, year } = dateStr;
  let ddmmyyyy = day + month + year;
  let mmddyyyy = month + day + year;
  let yyyymmdd = year + month + day;

  let ddmmyy = day + month + year.slice(-2);
  let mmddyy = month + day + year.slice(-2);
  let yymmdd = year.slice(-2) + month + day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
};

const checkPalindromeAll = (date) => {
  let listOfPalindrome = getAllDates(date);
  let output = false;
  for (let item of listOfPalindrome) {
    if (isPalindrome(item)) {
      output = true;
      break;
    }
  }
  return output;
};
