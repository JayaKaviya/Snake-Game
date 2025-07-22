
const board = document.getElementById("board");
const ctx = board.getContext("2d");
const square = 20;

// Initial snake with 2 segments
const snake = [
  { x: 100, y: 100 },
  { x: 80, y: 100 }
];

window.snake = snake;

// Movement direction (initially right)
const move = { x: square, y: 0 };

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


// ------------------------------
// Move the snake forward by 1  block

function moveSnake() {
 // Get the current head of the snake
 const head = { 
  x: snake[0].x + move.x, 
  y: snake[0].y + move.y 
};

// Add the new head to the beginning of the snake
snake.unshift(head);

// Remove the last segment (tail) to simulate movement
snake.pop();

}

// ------------------------------
// Clear the canvas
function clear_canvas() {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.fillRect(0, 0, board.width, board.height);
  ctx.strokeRect(0, 0, board.width, board.height);
}


// Game loop
function main() {
  setTimeout(() => {
    clear_canvas();
    moveSnake();
    draw_snake();
    main(); // Repeat
  }, 100);
}

window.snake = snake;
window.main = main;
main(); // call after assigning
window.snake = snake;
window.moveSnake = moveSnake;
window.clear_canvas = clear_canvas;
window.board = board;
window.ctx = ctx;