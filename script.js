function playGame(userMove) {
    const randomnumber = Math.random();

    let move = '';

    if (randomnumber >= 0 && randomnumber < 1 / 3) {

        move = 'rock';
    } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {

        move = 'paper';
    } else if (randomnumber >= 2 / 3 && randomnumber < 1) {

        move = 'scissors';
    }

    let result = '';

    if (userMove === move) {

        result = 'Tie';
    } else if (
        (userMove === 'rock' && move === 'scissors') ||
        (userMove === 'paper' && move === 'rock') ||
        (userMove === 'scissors' && move === 'paper')
    ) {
        result = 'You Win!';

    } else {

        result = 'You Lose.';
    }

    document.getElementById('computer-move').innerText = `Computer Move: ${move}`;
    
    document.getElementById('result-box').innerText = `Result: ${result}`;
}
