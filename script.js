function getCPUchoice() {
  let rnd = Math.floor(Math.random() * 3);
  console.log("rnd: " + rnd);
  switch (rnd) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
  }
}

console.log(getCPUchoice());
