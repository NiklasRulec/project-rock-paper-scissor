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
  console.log({ roundsInput });
  document.querySelector(".rounds").style.display = "none";
  document.querySelector(".rounds-output").style.display = "flex";
  document.querySelector(".buttons").style.display = "block";
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  return roundsInput;
};

// ! #################### USER SCHERE ####################

function userSchere() {
  event.preventDefault();
  animationFunction();
  let userInput = 1;
  console.log({ userInput });
  let min = 1;
  let max = 3;
  let comInput = Math.round(Math.random() * (max - min) + min);
  console.log({ comInput });

  // ! +++++++++++ Unentschieden +++++++++++
  if (userInput == comInput) {
    console.log("unentschieden");
    document.querySelector(".comment").innerText = "Unentschieden";
    document.querySelector(".user-pick").src = "./assets/img/Schere.png";
    document.querySelector(".com-pick").src = "./assets/img/Schere.png";
    comScore++;
    userScore++;
  } else if (userInput == 1 && comInput == 2) {
    // ! +++++++++++ Sieg Com +++++++++++
    console.log("User : Schere , Com : Stein. Com gewinnt");
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Schere.png";
    document.querySelector(".com-pick").src = "./assets/img/Stein.png";
    comScore++;
  } else if (userInput == 1 && comInput == 3) {
    // ! +++++++++++ Sieg User +++++++++++
    console.log("User : Schere , Com : Papier. User gewinnt");
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Schere.png";
    document.querySelector(".com-pick").src = "./assets/img/Papier.png";
    userScore++;
  }
  roundCount++;
  console.log({ roundCount }, { roundsInput });
  console.log({ userScore }, { comScore });
  document.querySelector(".user-score").innerText = userScore;
  document.querySelector(".com-score").innerText = comScore;
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  if (roundCount < roundsInput) {
    console.log("weiter");
  } else if ((roundCount = roundsInput && userScore > comScore)) {
    console.log("Spiel vorbei. Sieg User");
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg User";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore < comScore)) {
    console.log("Spiel vorbei. Sieg Com");
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg Com";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore == comScore)) {
    console.log("Spiel vorbei. Spiel unentschieden");
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
  console.log({ userInput });
  let min = 1;
  let max = 3;
  let comInput = Math.round(Math.random() * (max - min) + min);
  console.log({ comInput });
  // ! +++++++++++ Unentschieden +++++++++++
  if (userInput == comInput) {
    console.log("unentschieden");
    document.querySelector(".comment").innerText = "Unentschieden";
    document.querySelector(".user-pick").src = "./assets/img/Stein.png";
    document.querySelector(".com-pick").src = "./assets/img/Stein.png";
    comScore++;
    userScore++;
  } else if (userInput == 2 && comInput == 1) {
    // ! +++++++++++ Sieg User +++++++++++
    console.log("User : Sein , Com : Schere. User gewinnt");
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Stein.png";
    document.querySelector(".com-pick").src = "./assets/img/Schere.png";
    userScore++;
  } else if (userInput == 2 && comInput == 3) {
    // ! +++++++++++ Sieg Com +++++++++++
    console.log("User : Stein , Com : Papier. Com gewinnt");
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Stein.png";
    document.querySelector(".com-pick").src = "./assets/img/Papier.png";
    comScore++;
  }

  roundCount++;
  console.log({ roundCount }, { roundsInput });
  console.log({ userScore }, { comScore });
  document.querySelector(".user-score").innerText = userScore;
  document.querySelector(".com-score").innerText = comScore;
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  if (roundCount < roundsInput) {
    console.log("weiter");
  } else if ((roundCount = roundsInput && userScore > comScore)) {
    console.log("Spiel vorbei. Sieg User");
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg User";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore < comScore)) {
    console.log("Spiel vorbei. Sieg Com");
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg Com";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore == comScore)) {
    console.log("Spiel vorbei. Spiel unentschieden");
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
  console.log({ userInput });
  let min = 1;
  let max = 3;
  let comInput = Math.round(Math.random() * (max - min) + min);
  console.log({ comInput });

  if (userInput == comInput) {
    // ! +++++++++++ Sieg User +++++++++++
    console.log("unentschieden");
    document.querySelector(".comment").innerText = "Unentschieden";
    document.querySelector(".user-pick").src = "./assets/img/Papier.png";
    document.querySelector(".com-pick").src = "./assets/img/Papier.png";
    comScore++;
    userScore++;
  } else if (userInput == 3 && comInput == 1) {
    // ! +++++++++++ Sieg Com +++++++++++
    console.log("User : Papier , Com : Schere. Com gewinnt");
    document.querySelector(".comment").innerText = "Com gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Papier.png";
    document.querySelector(".com-pick").src = "./assets/img/Schere.png";
    comScore++;
  } else if (userInput == 3 && comInput == 2) {
    // ! +++++++++++ Sieg User +++++++++++
    console.log("User : Papier , Com : Stein. User gewinnt");
    document.querySelector(".comment").innerText = "User gewinnt";
    document.querySelector(".user-pick").src = "./assets/img/Papier.png";
    document.querySelector(".com-pick").src = "./assets/img/Stein.png";
    userScore++;
  }
  roundCount++;
  console.log({ roundCount }, { roundsInput });
  console.log({ userScore }, { comScore });
  document.querySelector(".user-score").innerText = userScore;
  document.querySelector(".com-score").innerText = comScore;
  document.querySelector(".rounds-output-counter").innerText =
    roundCount + " / " + roundsInput;
  if (roundCount < roundsInput) {
    console.log("weiter");
  } else if ((roundCount = roundsInput && userScore > comScore)) {
    console.log("Spiel vorbei. Sieg User");
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg User";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore < comScore)) {
    console.log("Spiel vorbei. Sieg Com");
    document.querySelector(".comment").innerText = "Spiel vorbei. Sieg Com";
    document.querySelector(".buttons").style.display = "none";
  } else if ((roundCount = roundsInput && userScore == comScore)) {
    console.log("Spiel vorbei. Spiel unentschieden");
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
