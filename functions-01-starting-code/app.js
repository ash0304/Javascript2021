const startGameBtn = document.getElementById("start-game-btn");

// 匿名函式存進變數
const start = function() {
  console.log("Game is starting...");
}

// const person = {
//   name: 'Ash',
//   greet: function greet() {
//     console.log("hello there");
//   },
// };

// person.greet();

console.log(startGame);

startGameBtn.addEventListener("click", startGame);
