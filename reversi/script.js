const stage = document.getElementById("stage");
const squareTemplate = document.getElementById("square-template");
const stoneStateList = [];

let currentColor = 1;
const getReversibleStones = (idx) => {
  const squareNums = [
    7 - (idx % 8),
    Math.min(7 - (idx % 8), (56 + (idx % 8) - idx) / 8),
    (56 + (idx % 8) - idx) / 8,
    Math.min(idx % 8, (56 + (idx % 8) - idx) / 8),
    idx % 8,
    Math.min(idx % 8, (idx - (idx % 8)) / 8),
  ];

  const parameters = [1, 9, 8, 7, -1, -9, -8, -7];

  let results = [];

  for (let i = 0; i < 8; i++) {
    const box = [];
    const squareNum = squareNums[i];
    const params = parameters[i];
    const nextStoneState = stoneStateList[idx + params];

    if (nextStoneState === 0 || nextStoneState === currentColor) continue;
    box.push(idx + params);

    for (let j = 0; j < squareNum - 1; j++) {
      const targetIdx = idx + params * 2 + params * j;
      const targetColoor = stoneStateList[targetIdx];
      if (targetColor === 0) continue;
      if (targetColor === currentColor) {
        results = results.concat(box);
        break;
      } else {
        box.push(targetIdx)
      }
    }
  }
  return results;
};

const onClickSquare = (index) => {
  // console.log(index);
  if (stoneStateList [index] !== 0) {
    alert("ここには置けません");
    return
  }
}

const createSquares = () => {
  for (let i = 0; i < 64; i++) {
    const square = squareTemplate.cloneNode(true);
    square.removeAttribute("id");
    stage.appendChild(square);

    const stone = square.querySelector(".stone");

    let defaultState;
    if (i == 27 || i == 36) {
      defaultState = 1;
    } else if (i == 28 || i == 35) {
      defaultState = 2;
    } else {
      defaultState = 0;
    }

    stone.setAttribute("data-state", defaultState);
    stone.setAttribute("data-index", i);
    stoneStateList.push(defaultState);

    square.addEventListener(`click`, () => {
      onClickSquare(i);
    })
  }
};

window.onload = () => {
  createSquares();
};