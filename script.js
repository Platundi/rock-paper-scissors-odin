// alert("Best of Five, good luck :)");
let gewonnen = 0;
let verloren = 0;
let x;

let btnContainer = document.querySelector(".btnContainer");

btnContainer.addEventListener("click", (event) => {
  function game() {
    let target = event.target;
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
      // let isValid;
      let playerSelection;
      // let restLetters;

      // while (!isValid) {
      //   playerSelection = prompt("Gib Rock, Paper oder Scissors ein");
      //   restLetters = playerSelection.slice(1);
      //   playerSelection =
      //     playerSelection.charAt(0).toUpperCase() + restLetters.toLowerCase();

      //   if (
      //     playerSelection == "Rock" ||
      //     playerSelection == "Paper" ||
      //     playerSelection == "Scissors"
      //   ) {
      //     isValid = true;
      //   } else {
      //     alert("Falsche Eingabe. Bitte Rock, Paper oder Scissors eingeben!");
      //   }
      // }
      console.log(target.id);
      switch (target.id) {
        case "schere":
          playerSelection = "Scissors";
          break;
        case "stein":
          playerSelection = "Rock";
          break;
        case "papier":
          playerSelection = "Paper";
          break;
      }
      return playerSelection;
    }

    // Spiellogik
    function playRound(playerSelection, cpuSelection) {
      if (playerSelection == cpuSelection) {
        // alert("Unentschieden! Wiederholung");
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
    let resultText = document.createElement("p");
    let resultContainer = document.querySelector(".result");
    let result = playRound(playerSelection, cpuSelection);
    if (result == "Gewonnen") {
      gewonnen++;
      resultText.textContent = result;
      resultContainer.appendChild(resultText);
      // alert("Gewonnen, CPU hatte " + cpuSelection);
      // if (gewonnen == 3) {
      //   alert("Gewonnen!");
      //   return 1;
      // }
    } else if (result == "Verloren") {
      verloren++;
      resultText.textContent = result;
      resultContainer.appendChild(resultText);
      // alert("Verloren, CPU hatte " + cpuSelection);
      // if (verloren == 3) {
      //   alert("Verloren");
      //   return 1;
      // }
    } else {
      resultText.textContent = result;
      resultContainer.appendChild(resultText);
      return 0;
    }
  }

  // do {
  x = game();
  // } while (x != 1);
  // location.reload();
});
