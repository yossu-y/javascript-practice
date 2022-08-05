const stage = document.getElementById("stage");
const squareTemplate = document.getElementById("square-template");
const stoneStateList = [];

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