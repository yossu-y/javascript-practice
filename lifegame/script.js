'use strict';
const GRID_WIDTH = 32;
const GRID_HEIGHT = 32;
var cells = [];
// 細胞クラス
class Cell {
  constructor(isAlive) {
    this.isAlive = isAlive
  }
}
main();
// エントリポイント
function main() {
  // 次へボタン
  $('#next').on('click', function() {
    stepCellState();
  });
  // エリア描画
  drawArea();
  // セルの初期状態作成
  createCells(cells);
  updateCell();
  // クリックしたセルの生存を反転させる
  $('td').on('click', function() {
    var x = $(this).attr('x');
    var y = $(this).attr('y');
    cells[y][x].isAlive = cells[y][x].isAlive ? false : true;
    updateCell();
  });
}
// セルの状態作成
function createCells(cells) {
  for (var y = 0; y < GRID_HEIGHT; y++) {
    var cellRow = [];
    for (var x = 0; x < GRID_WIDTH; x++) {
      var cell = new Cell(false);
      cellRow.push(cell);
    }
    cells.push(cellRow);
  }
}
// エリアの描画
function drawArea() {
  $('table.cells').empty();
  for (var y = 0; y < GRID_HEIGHT; y++) {
    var row = $('<tr>');
    for (var x = 0; x < GRID_WIDTH; x++) {
      var col = $('<td x=' + x + ' y=' + y + '>');
      row.append(col);
    }
    $('table.cells').append(row);
  }
}
// セルの表示を更新
function updateCell() {
  for (var y = 0; y < GRID_HEIGHT; y++) {
    for (var x = 0; x < GRID_WIDTH; x++) {
      var elem = $('td[x= '+ x + '][y=' + y + ']');
      if (cells[y][x].isAlive) {
        elem.removeClass("death");
        elem.addClass("alive");
      } else {
        elem.removeClass("alive");
        elem.addClass("death");
      }
    }
  }
}
// セルの状態を進める
function stepCellState() {
  console.log("next");
  var nextStepSell = [];        // 次ターンのセル状態
  createCells(nextStepSell);
  for (var y = 0; y < GRID_HEIGHT; y++) {
    for (var x = 0; x < GRID_WIDTH; x++) {
      nextStepSell[y][x].isAlive = checkCellAlive(x, y);
    }
  }
  cells = nextStepSell;
  updateCell();
}
// セルの生死の判断を行う
function checkCellAlive(x, y) {
  var result = false;
  // 周りにいくつ生きているセルが居るか判定
  var aliveCount = 0;
  // 左上
  if (x > 0 && y > 0 && cells[y-1][x-1].isAlive) {
    aliveCount++;
  }
  // 左
  if (x > 0 && cells[y][x-1].isAlive) {
    aliveCount++;
  }
  // 左下
  if (x > 0 && y <= GRID_HEIGHT - 2 && cells[y+1][x-1].isAlive) {
    aliveCount++;
  }
  // 下
  if (y <= GRID_HEIGHT - 2 && cells[y+1][x].isAlive) {
    aliveCount++;
  }
  // 右下
  if (x <= GRID_WIDTH - 2 && y <= GRID_HEIGHT - 2 && cells[y+1][x+1].isAlive) {
    aliveCount++;
  }
  // 右
  if (x <= GRID_WIDTH - 2 && cells[y][x+1].isAlive) {
    aliveCount++;
  }
  // 右上
  if (x <= GRID_WIDTH - 2 && y > 0 && cells[y-1][x+1].isAlive) {
    aliveCount++;
  }
  // 上
  if (y > 0 && cells[y-1][x].isAlive) {
    aliveCount++;
  }
  if (!cells[y, x].isAlive && aliveCount == 3) {
    // 誕生判定
    result = true;
  } else if (cells[y, x].isAlive && aliveCount == 3 || aliveCount == 4) {
    // 生存判定
    result = true;
  } else if (cells[y, x].isAlive && aliveCount <= 1) {
    // 過疎判定
    result = false;
  } else if (cells[y, x].isAlive && aliveCount >= 4) {
    // 過密判定
    result = true;
  }
  return result;
}