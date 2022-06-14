<?php 
$user_name = 'Chase';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Over or Under</title>
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="stylesheet" href="css/normalize.css" />
</head>
<body>
    <h2 class="greeting">Welcome back <?= $user_name ?>!</h2>
    <div class="game__container">
        <div class="chips">
            <h2>Your Chips: <h2 id="player_chips"></h2></h2>
        </div>
        <div class="grid dice__grid">
            <img id="dice1" class="dice" src="images/dice1.png" />
            <img id="dice2" class="dice" src="images/dice1.png" />

        </div>
        <div class="grid button__grid">
            <button onclick=overBet() id="over--button" class="bet__button">Over</button>
            <button onclick=sevenBet() id="seven--button" class="bet__button">7</button>
            <button onclick=underBet() id="under--button" class="bet__button">Under</button>
        </div>
        <div class="bet__container">
            <div class="bet__input">
                <label for="bet_amount">Your Bet: </label>
                <input id="player_bet" type="number" name="bet_amount" min="10" max="250">
            </div>
            <h2 id="warning_label">Please enter a bet between 10 and 250.</h2>
        </div>
        
    </div>
    <script src="js/main.js"></script>
</body>
</html>
