let x;
let y;

document.getElementById("diceBtn").onclick = function () {
  x = Math.floor(Math.random() * 20) + 1;
  document.getElementById("diceBtn").innerHTML = x;
  console.log("Initial roll:", x);
};

document.getElementById("btn1").onclick = function () {
  y = Math.floor(Math.random() * 20) + 1;
  document.getElementById("diceBtn").innerHTML = y;
  console.log("Higher?:", y);
  if (y > x) {
    document.getElementById("result").innerHTML = "You win!";
  } else {
    document.getElementById("result").innerHTML = "You lose!";
  }
  x = y;
};

document.getElementById("btn2").onclick = function () {
  y = Math.floor(Math.random() * 20) + 1;
  document.getElementById("diceBtn").innerHTML = y;
  console.log("Lower:", y);
  if (y < x) {
    document.getElementById("result").innerHTML = "You win!";
  } else {
    document.getElementById("result").innerHTML = "You lose!";
  }
  x = y;
};
