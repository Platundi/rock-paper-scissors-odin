alert("Best of Five, good luck :)");
let gewonnen = 0;
let verloren = 0;
let counter;

let btnContainer = document.querySelector(".btnContainer");

btnContainer.addEventListener("click", (event) => {
  if (event.target.id) {
    counter = game(event);
  }
});

let neustart = document.querySelector("#retry");

neustart.addEventListener("click", () => {
  location.reload();
});

function game(event) {
  const playerSelection = getPlayerChoice();
  const cpuSelection = getCPUchoice();

  // CPU-Input
  function getCPUchoice() {
    let rnd = Math.floor(Math.random() * 3);
    switch (rnd) {
      case 0:
        return "Stein";
      case 1:
        return "Papier";
      case 2:
        return "Schere";
    }
  }

  // Userinput
  function getPlayerChoice() {
    let target = event.target;
    let playerSelection;
    console.log(target.id);
    switch (target.id) {
      case "schere":
        playerSelection = "Schere";
        break;
      case "stein":
        playerSelection = "Stein";
        break;
      case "papier":
        playerSelection = "Papier";
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
        case "Stein":
          if (cpuSelection == "Papier") {
            return "Verloren";
          } else if (cpuSelection == "Schere") {
            return "Gewonnen";
          }
          break;
        case "Papier":
          if (cpuSelection == "Stein") {
            return "Gewonnen";
          } else if (cpuSelection == "Schere") {
            return "Verloren";
          }
          break;
        case "Schere":
          if (cpuSelection == "Stein") {
            return "Verloren";
          } else if (cpuSelection == "Papier") {
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
    resultText.textContent = `${result}, CPU hatte: ` + cpuSelection;
    resultContainer.appendChild(resultText);
    if (gewonnen == 5) {
      alert("Spiel Gewonnen!");
      if (window.confirm("Nochmal spielen?") == true) {
        location.reload();
      } else {
        disable();
      }
    }
  } else if (result == "Verloren") {
    verloren++;
    resultText.textContent = `${result}, CPU hatte: ` + cpuSelection;
    resultContainer.appendChild(resultText);
    if (verloren == 5) {
      alert("Spiel Verloren");
      if (window.confirm("Nochmal spielen?") == true) {
        location.reload();
      } else {
        disable();
      }
    }
  } else {
    resultText.textContent = `${result}`;
    resultContainer.appendChild(resultText);
  }

  // Buttons disablen
  function disable() {
    let childNodes = btnContainer.childNodes;
    childNodes.forEach((child) => {
      child.disabled = true;
    });
  }
}
