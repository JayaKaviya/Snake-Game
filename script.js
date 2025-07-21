const board = document.getElementById("board");
const ctx = board.getContext("2d");
const square = 20;

// Dummy snake (2 blocks for visualization)
const snake = [
  { x: 100, y: 100 },
  { x: 80, y: 100 }
];

// Draw one snake segment
function draw_rect(part) {
  ctx.fillStyle = 'lightblue';
  ctx.strokeStyle = 'darkblue';
  ctx.fillRect(part.x,part.y,square,square);
  ctx.strokeRect(part.x,part.y,square,square);
}

// Draw the full snake
function draw_snake() {
  snake.forEach(draw_rect);
}

// Automatically draw on load
draw_snake();
