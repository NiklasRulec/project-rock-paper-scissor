// ! #################### BASIC ####################

let userScore = 0;
let comScore = 0;
let roundCount = 0;
let roundsInput = 0;

// ! #################### RESTART ####################

const restartFunction = () => {
  location.reload();
};

// ! #################### ROUND-COUNTER ####################

const roundCounter = () => {
  roundsInput = document.querySelector('input[name="rounds"]:checked').value;
  document.querySelector(".rounds").style.display = "none";
  document.querySelector(".rounds-output").style.display = "flex";
  document.querySelector(".rounds-header").innerText = "Round-Counter";
  document.querySelector(".buttons").style.display = "flex";
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  return roundsInput;
};

// ! #################### USER SCHERE ####################

function userSchere() {
  event.preventDefault();
  animationFunction();
  let userInput = 1;
  let min = 1;
  let max = 5;
  let comInput = Math.round(Math.random() * (max - min) + min);

  // ! +++++++++++ Unentschieden +++++++++++
  if (userInput == comInput) {
    document.querySelector(".comment").innerText = "Unentschieden";
    document.querySelector(".user-pick").src = "./assets/img/Schere.png";
    document.querySelector(".com-pick").src = "./assets/img/Schere.png";
    comScore++;
    userScore++;
  } else if (userInput == 1 && comInput == 2) {
    // ! +++++++++++ Sieg Com +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Schere.png";
    document.querySelector(".com-pick").src = "./assets/img/Stein.png";
    comScore++;
  } else if (userInput == 1 && comInput == 3) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Schere.png";
    document.querySelector(".com-pick").src = "./assets/img/Papier.png";
    userScore++;
  } else if (userInput == 1 && comInput == 4) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Schere.png";
    document.querySelector(".com-pick").src = "./assets/img/Echse.png";
    userScore++;
  } else if (userInput == 1 && comInput == 5) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Schere.png";
    document.querySelector(".com-pick").src = "./assets/img/Spock.png";
    comScore++;
  }
  // ? +++++++++++ Daten aktualisieren +++++++++++
  roundCount++;
  document.querySelector(".user-score").innerText = userScore;
  document.querySelector(".com-score").innerText = comScore;
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  if (roundCount < roundsInput) {
  } else if ((roundCount = roundsInput && userScore > comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg User";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore < comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg Com";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore == comScore)) {
    document.querySelector(".comment").innerText =
      "Spiel vorbei. Unentschieden";
    document.querySelector(".buttons").style.display = "none";
  } else if (roundCount > roundsInput) {
    location.reload();
  }
}

// ! #################### USER STEIN ####################

function userStein() {
  event.preventDefault();
  animationFunction();
  let userInput = 2;
  let min = 1;
  let max = 5;
  let comInput = Math.round(Math.random() * (max - min) + min);
  // ! +++++++++++ Unentschieden +++++++++++
  if (userInput == comInput) {
    document.querySelector(".comment").innerText = "Unentschieden";
    document.querySelector(".user-pick").src = "./assets/img/Stein.png";
    document.querySelector(".com-pick").src = "./assets/img/Stein.png";
    comScore++;
    userScore++;
  } else if (userInput == 2 && comInput == 1) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Stein.png";
    document.querySelector(".com-pick").src = "./assets/img/Schere.png";
    userScore++;
  } else if (userInput == 2 && comInput == 3) {
    // ! +++++++++++ Sieg Com +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Stein.png";
    document.querySelector(".com-pick").src = "./assets/img/Papier.png";
    comScore++;
  } else if (userInput == 2 && comInput == 4) {
    // ! +++++++++++ Sieg Com +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Stein.png";
    document.querySelector(".com-pick").src = "./assets/img/Echse.png";
    userScore++;
  } else if (userInput == 2 && comInput == 5) {
    // ! +++++++++++ Sieg Com +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Stein.png";
    document.querySelector(".com-pick").src = "./assets/img/Spock.png";
    comScore++;
  }
  // ? +++++++++++ Daten aktualisieren +++++++++++
  roundCount++;
  document.querySelector(".user-score").innerText = userScore;
  document.querySelector(".com-score").innerText = comScore;
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  if (roundCount < roundsInput) {
  } else if ((roundCount = roundsInput && userScore > comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg User";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore < comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg Com";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore == comScore)) {
    document.querySelector(".comment").innerText =
      "Spiel vorbei. Unentschieden";
    document.querySelector(".buttons").style.display = "none";
  } else if (roundCount > roundsInput) {
    location.reload();
  }
}

// ! #################### USER PAPIER ####################

function userPapier() {
  event.preventDefault();
  animationFunction();
  let userInput = 3;
  let min = 1;
  let max = 5;
  let comInput = Math.round(Math.random() * (max - min) + min);

  if (userInput == comInput) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "Unentschieden";
    document.querySelector(".user-pick").src = "./assets/img/Papier.png";
    document.querySelector(".com-pick").src = "./assets/img/Papier.png";
    comScore++;
    userScore++;
  } else if (userInput == 3 && comInput == 1) {
    // ! +++++++++++ Sieg Com +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Papier.png";
    document.querySelector(".com-pick").src = "./assets/img/Schere.png";
    comScore++;
  } else if (userInput == 3 && comInput == 2) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Papier.png";
    document.querySelector(".com-pick").src = "./assets/img/Stein.png";
    userScore++;
  } else if (userInput == 3 && comInput == 4) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Papier.png";
    document.querySelector(".com-pick").src = "./assets/img/Echse.png";
    comScore++;
  } else if (userInput == 3 && comInput == 5) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Papier.png";
    document.querySelector(".com-pick").src = "./assets/img/Spock.png";
    userScore++;
  }
  // ? +++++++++++ Daten aktualisieren +++++++++++
  roundCount++;
  document.querySelector(".user-score").innerText = userScore;
  document.querySelector(".com-score").innerText = comScore;
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  if (roundCount < roundsInput) {
  } else if ((roundCount = roundsInput && userScore > comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg User";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore < comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg Com";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore == comScore)) {
    document.querySelector(".comment").innerText =
      "Spiel vorbei. Unentschieden";
    document.querySelector(".buttons").style.display = "none";
  } else if (roundCount > roundsInput) {
    location.reload();
  }
}

// ! #################### USER ECHSE ####################

function userEchse() {
  event.preventDefault();
  animationFunction();
  let userInput = 4;
  let min = 1;
  let max = 5;
  let comInput = Math.round(Math.random() * (max - min) + min);

  if (userInput == comInput) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "Unentschieden";
    document.querySelector(".user-pick").src = "./assets/img/Echse.png";
    document.querySelector(".com-pick").src = "./assets/img/Echse.png";
    comScore++;
    userScore++;
  } else if (userInput == 4 && comInput == 1) {
    // ! +++++++++++ Sieg Com +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Echse.png";
    document.querySelector(".com-pick").src = "./assets/img/Schere.png";
    comScore++;
  } else if (userInput == 4 && comInput == 2) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Echse.png";
    document.querySelector(".com-pick").src = "./assets/img/Stein.png";
    comScore++;
  } else if (userInput == 4 && comInput == 3) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Echse.png";
    document.querySelector(".com-pick").src = "./assets/img/Papier.png";
    userScore++;
  } else if (userInput == 4 && comInput == 5) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Echse.png";
    document.querySelector(".com-pick").src = "./assets/img/Spock.png";
    userScore++;
  }
  // ? +++++++++++ Daten aktualisieren +++++++++++
  roundCount++;
  document.querySelector(".user-score").innerText = userScore;
  document.querySelector(".com-score").innerText = comScore;
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  if (roundCount < roundsInput) {
  } else if ((roundCount = roundsInput && userScore > comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg User";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore < comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg Com";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore == comScore)) {
    document.querySelector(".comment").innerText =
      "Spiel vorbei. Unentschieden";
    document.querySelector(".buttons").style.display = "none";
  } else if (roundCount > roundsInput) {
    location.reload();
  }
}

// ! #################### USER SPOCK ####################

function userSpock() {
  event.preventDefault();
  animationFunction();
  let userInput = 5;
  let min = 1;
  let max = 5;
  let comInput = Math.round(Math.random() * (max - min) + min);

  if (userInput == comInput) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "Unentschieden";
    document.querySelector(".user-pick").src = "./assets/img/Spock.png";
    document.querySelector(".com-pick").src = "./assets/img/Spock.png";
    comScore++;
    userScore++;
  } else if (userInput == 5 && comInput == 1) {
    // ! +++++++++++ Sieg Com +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Spock.png";
    document.querySelector(".com-pick").src = "./assets/img/Schere.png";
    comScore++;
  } else if (userInput == 5 && comInput == 2) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Spock.png";
    document.querySelector(".com-pick").src = "./assets/img/Stein.png";
    userScore++;
  } else if (userInput == 5 && comInput == 3) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Spock.png";
    document.querySelector(".com-pick").src = "./assets/img/Papier.png";
    comScore++;
  } else if (userInput == 5 && comInput == 4) {
    // ! +++++++++++ Sieg User +++++++++++
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Spock.png";
    document.querySelector(".com-pick").src = "./assets/img/Echse.png";
    comScore++;
  }
  // ? +++++++++++ Daten aktualisieren +++++++++++
  roundCount++;
  document.querySelector(".user-score").innerText = userScore;
  document.querySelector(".com-score").innerText = comScore;
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  if (roundCount < roundsInput) {
  } else if ((roundCount = roundsInput && userScore > comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg User";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore < comScore)) {
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg Com";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore == comScore)) {
    document.querySelector(".comment").innerText =
      "Spiel vorbei. Unentschieden";
    document.querySelector(".buttons").style.display = "none";
  } else if (roundCount > roundsInput) {
    location.reload();
  }
}

// ! #################### ANIMATION ####################

function animationFunction() {
  let animationContainer = document.querySelector(".animation");
  animationContainer.style.display = "flex";
  setTimeout(function () {
    animationContainer.style.display = "none";
  }, 1200);
}

// ! #################### MODE-TOGGLE ####################

const modeToggle = () => {
  document.querySelector(".bg").classList.toggle("mode");
};

// ! #################### RULES ####################

const rulesFunction = () => {
  document.querySelector(".rules").classList.toggle("visible");
  document.querySelector(".rules-button").innerText = "REGELN AUSBLENDEN";
};
