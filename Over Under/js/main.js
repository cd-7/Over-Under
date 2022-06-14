var diceImages = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
var sevenButton = document.getElementById("seven--button");
var overButton = document.getElementById("over--button");
var underButton = document.getElementById("under--button");
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var roll1 = 1;
var roll2 = 1;
var playerChips = 1000;
var playerBet;

document.getElementById("player_chips").innerHTML =
  playerChips;

function overBet() {
  if (playerChips < 10) {
    document.getElementById("warning_label").innerHTML =
      "No chips left. Please buy more.";
    document.getElementById("warning_label").style.opacity =
      "1";
    setTimeout(hideWarning, 5000);
    return;
  }
  sevenButton.style.visibility = "hidden";
  underButton.style.visibility = "hidden";
  overButton.disabled = true;
  document.getElementById("player_bet").disabled = true;
  playerBet = document.getElementById("player_bet").value;
  document.getElementById("player_bet").value = "";
  if (playerBet < 10 || playerBet > 1000) {
    document.getElementById("warning_label").innerHTML =
      "Please enter a bet between 10 and 250.";
    document.getElementById("warning_label").style.opacity =
      "1";
    resetGame();
    setTimeout(hideWarning, 5000);
    return;
  }
  rollDice();
  if (roll1 + roll2 > 7) {
    playerChips += parseInt(playerBet);
  } else {
    playerChips -= parseInt(playerBet);
  }
  console.log(playerChips);
  document.getElementById("player_chips").innerHTML =
    playerChips;
}

function sevenBet() {
  if (playerChips < 10) {
    document.getElementById("warning_label").innerHTML =
      "No chips left. Please buy more.";
    document.getElementById("warning_label").style.opacity =
      "1";
    setTimeout(hideWarning, 5000);
    return;
  }
  overButton.style.visibility = "hidden";
  underButton.style.visibility = "hidden";
  overButton.disabled = true;
  document.getElementById("player_bet").disabled = true;
  playerBet = document.getElementById("player_bet").value;
  document.getElementById("player_bet").value = "";
  if (playerBet < 10 || playerBet > 250) {
    document.getElementById("warning_label").innerHTML =
      "Please enter a bet between 10 and 250.";
    document.getElementById("warning_label").style.opacity =
      "1";
    resetGame();
    setTimeout(hideWarning, 5000);
    return;
  }
  rollDice();
  if (roll1 + roll2 == 7) {
    playerChips += parseInt(playerBet) * 3;
  } else {
    playerChips -= parseInt(playerBet);
  }
  console.log(playerChips);
  document.getElementById("player_chips").innerHTML =
    playerChips;
}

function underBet() {
  if (playerChips < 10) {
    document.getElementById("warning_label").innerHTML =
      "No chips left. Please buy more.";
    document.getElementById("warning_label").style.opacity =
      "1";
    setTimeout(hideWarning, 5000);
    return;
  }
  sevenButton.style.visibility = "hidden";
  overButton.style.visibility = "hidden";
  underButton.disabled = true;
  document.getElementById("player_bet").disabled = true;
  playerBet = document.getElementById("player_bet").value;
  document.getElementById("player_bet").value = "";
  if (playerBet < 10 || playerBet > 250) {
    document.getElementById("warning_label").innerHTML =
      "Please enter a bet between 10 and 250.";
    document.getElementById("warning_label").style.opacity =
      "1";
    resetGame();
    setTimeout(hideWarning, 5000);
    return;
  }
  rollDice();
  if (roll1 + roll2 < 7) {
    playerChips += parseInt(playerBet);
  } else {
    playerChips -= parseInt(playerBet);
  }
  console.log(playerChips);
  document.getElementById("player_chips").innerHTML =
    playerChips;
}

function rollDice() {
  dice1.style.transform = "rotate(3600deg)";
  dice2.style.transform = "rotate(3600deg)";
  roll1 = Math.floor(Math.random() * 6) + 1;
  roll2 = Math.floor(Math.random() * 6) + 1;
  dice1.src = diceImages[roll1 - 1];
  dice2.src = diceImages[roll2 - 1];
  setTimeout(resetGame, 4000);
  dice1.style.transition = "2s";
  dice2.style.transition = "2s";
}

function resetGame() {
  dice1.style.transition = "0s";
  dice2.style.transition = "0s";
  dice1.style.transform = "rotate(0deg)";
  dice2.style.transform = "rotate(0deg)";
  overButton.style.visibility = "initial";
  sevenButton.style.visibility = "initial";
  underButton.style.visibility = "initial";
  overButton.disabled = false;
  sevenButton.disabled = false;
  underButton.disabled = false;
  document.getElementById("player_bet").disabled = false;
}

function hideWarning() {
  document.getElementById("warning_label").style.opacity =
    "0";
}
