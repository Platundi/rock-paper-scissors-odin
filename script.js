alert("Best of Five, good luck :)");
let gewonnen = 0;
let verloren = 0;
let x;

function game() {
  const playerSelection = getPlayerChoice();
  const cpuSelection = getCPUchoice();

  // CPU-Input
  function getCPUchoice() {
    let rnd = Math.floor(Math.random() * 3);
    switch (rnd) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
    }
  }

  // Userinput
  function getPlayerChoice() {
    let isValid;
    let playerSelection;
    let restLetters;

    while (!isValid) {
      playerSelection = prompt("Gib Rock, Paper oder Scissors ein");
      restLetters = playerSelection.slice(1);
      playerSelection =
        playerSelection.charAt(0).toUpperCase() + restLetters.toLowerCase();

      if (
        playerSelection == "Rock" ||
        playerSelection == "Paper" ||
        playerSelection == "Scissors"
      ) {
        isValid = true;
      } else {
        alert("Falsche Eingabe. Bitte Rock, Paper oder Scissors eingeben!");
      }
    }

    return playerSelection;
  }

  // Spiellogik
  function playRound(playerSelection, cpuSelection) {
    if (playerSelection == cpuSelection) {
      alert("Unentschieden! Wiederholung");
      return "Unentschieden";
    } else {
      switch (playerSelection) {
        case "Rock":
          if (cpuSelection == "Paper") {
            return "Verloren";
          } else if (cpuSelection == "Scissors") {
            return "Gewonnen";
          }
          break;
        case "Paper":
          if (cpuSelection == "Rock") {
            return "Gewonnen";
          } else if (cpuSelection == "Scissors") {
            return "Verloren";
          }
          break;
        case "Scissors":
          if (cpuSelection == "Rock") {
            return "Verloren";
          } else if (cpuSelection == "Paper") {
            return "Gewonnen";
          }
      }
    }
  }

  // Ergebnisverarbeitung
  let result = playRound(playerSelection, cpuSelection);
  if (result == "Gewonnen") {
    gewonnen++;
    alert("Gewonnen, CPU hatte " + cpuSelection);
    if (gewonnen == 3) {
      alert("Gewonnen!");
      return 1;
    }
  } else if (result == "Verloren") {
    verloren++;
    alert("Verloren, CPU hatte " + cpuSelection);
    if (verloren == 3) {
      alert("Verloren");
      return 1;
    }
  } else {
    return 0;
  }
}

do {
  x = game();
} while (x != 1);
location.reload();
