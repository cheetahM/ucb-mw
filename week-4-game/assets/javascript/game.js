//sets up random number user is trying to match
$(document).ready(function() {
    var scoreCounter = 0;
    var wins = 0;
    var losses = 0;
    $('#wins').text(wins);
    $('#losses').text(losses);
    var generateRandomNumber = function(max, min) {
        var max = 120,
            min = 19;
        var randomNumber = Math.floor(Math.random() * (max - min)) + min;
        return randomNumber;
    }

    var randomNum = generateRandomNumber(120, 19);

    $('#number').text(randomNum);


    //resets the game
    function reset() {
        randomNum = generateRandomNumber(120, 19);
        $('#number').text(randomNum);
        scoreCounter = 0;
        $('#total').text(scoreCounter);
    }

    //adds the wins to the total
    function winner() {
        alert("You won!!!");
        wins++;
        $('#wins').text(wins);
        reset();
    }

    //adds the losses to the total
    function loser() {
        alert("You lose!!");
        losses++;
        $('#losses').text(losses);
        reset();
    }

    function checkScore(scoreCounter, randomNum) {
        if (scoreCounter == randomNum) {
            winner();
        } else if (scoreCounter > randomNum) {
            loser();
        }
    }

    //eventHandlers for crystals
    $('#crystals').on('click', function(e) {
        scoreCounter = scoreCounter + generateRandomNumber(12,1);
        $('#total').text(scoreCounter);
        checkScore(scoreCounter, randomNum)
    });

});