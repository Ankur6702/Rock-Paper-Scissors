let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const restart = document.querySelector('.restart');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randNumber = Math.floor(Math.random() * 3);
    return choices[randNumber];
}

function win(userChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    if (userChoice === 'r') {
        result_p.innerHTML = "Rock" + "user ".fontsize(3).sub() + "smashed Scissor" + "comp ".fontsize(3).sub() + ".You Win!";
    }
    else if (userChoice === 's') {
        result_p.innerHTML = "Scissor" + "user ".fontsize(3).sub() + "cuts Paper" + "comp ".fontsize(3).sub() + ".You Win!";
    }
    else {
        result_p.innerHTML = "Paper" + "user ".fontsize(3).sub() + "covers Rock" + "comp ".fontsize(3).sub() + ".You Win!";
    }
    document.getElementById(userChoice).classList.add('greenGlow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('greenGlow'); }, 500);
}

function lose(userChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    if (userChoice === 'r') {
        result_p.innerHTML = "Rock" + "user ".fontsize(3).sub() + "covered by Paper" + "comp ".fontsize(3).sub() + ".You Lose!";
    }
    else if (userChoice === 's') {
        result_p.innerHTML = "Scissor" + "user ".fontsize(3).sub() + "smashed by Rock" + "comp ".fontsize(3).sub() + ".You Lose!";
    }
    else {
        result_p.innerHTML = "Paper" + "user ".fontsize(3).sub() + "cutted by Scissor" + "comp ".fontsize(3).sub() + ".You Lose!";
    }
    document.getElementById(userChoice).classList.add('redGlow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('redGlow'); }, 500)
}

function draw(userChoice) {
    result_p.innerHTML = "Selected Same. It's a Draw!";
    document.getElementById(userChoice).classList.add('greyGlow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('greyGlow'); }, 500);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });
    paper_div.addEventListener('click', function () {
        game("p");
    });
    scissor_div.addEventListener('click', function () {
        game("s");
    });
    restart.addEventListener('click', function () {
        userScore = 0;
        compScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        restart.classList.add('orangeGlow');
        setTimeout(function () { restart.classList.remove('orangeGlow'); }, 500);
        result_p.innerHTML = "Start the Game.";
    });
}

main();