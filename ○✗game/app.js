let flag = false;
let counter = 9;
let winningLine = null;
const squares = document.querySelectorAll(".square");
const squaresArray = [].slice.call(squares);
const messages = document.quarySelectorAll(".message-list li");
const messageArray = [].slice.call(messages);
const resetBtn = document.quarySelector("#reset-btn");

const setMessage = (id) => {
  messageArray.forEach((message) => {
    if (message.id === id) {
      message.classList.remove("js-hidden");
    } else {
      message.classList.add("js-hidden");
    }
  });
}

const filterById = (targetArray, idArray) => {
  return targetArray.filter((e) => {
    return (e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2] );
  });
}

const line1 = filterById(squaresArray, ["1-1", "1-2", "1-3"]);
const line2 = filterById(squaresArray, ["2-1", "2-2", "2-3"]);
const line3 = filterById(squaresArray, ["3-1", "3-2", "3-3"]);
const line4 = filterById(squaresArray, ["1-1", "2-1", "2-3"]);
const line5 = filterById(squaresArray, ["2-1", "2-2", "3-2"]);
const line6 = filterById(squaresArray, ["3-1", "3-2", "3-3"]);
const line7 = filterById(squaresArray, ["1-1", "2-2", "3-3"]);
const line8 = filterById(squaresArray, ["1-3", "2-2", "3-1"]);
const lineArray = [line1, line2, line3, line4, line5, line6, line7, line8];

const isWinner = (symbol) => {
  const result = lineArray.some((line) => {
    const subResult = line.every((square) => {
      if (symbol === "maru") {
        return square.classList.contains("js-maru-checked");
      } else
      if (symbol === "batu") {
        return square.classList.contains("js-batu-checked");
      }
    });
    if (subResult) { winningLine = line }
    return subResult;
  });
  return result;
}