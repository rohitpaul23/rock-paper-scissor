let buttonEle = document.getElementById("button");
const myScores = document.querySelector(".myScore");
const compScores = document.querySelector(".compScore");


let arr = ["rock", "paper", "scissor"];
let N = 5;

const n_buts = document.querySelectorAll('.but');

function starter() {
    document.getElementById("textbox").innerHTML = "Computer pick";
    document.getElementById("mytext").innerHTML = "My pick";
    document.getElementById("solution").innerHTML = "Result";

    myScores.innerHTML = "0";
    compScores.innerHTML = "0";
}

n_buts.forEach(n_but => {
    n_but.addEventListener('click', () =>{
        N = n_but.textContent;
        n_buts.forEach(but => {
            but.setAttribute('style', 'color : white; background-color: darkcyan;' );  
        })
        n_but.setAttribute('style', 'color : darkslategrey; background-color: white;' );
    })
});

const game_tab = document.querySelector('.gameTab');
const start_tab = document.querySelector('.start');

start_tab.addEventListener('click', ()=>{
    starter();
    game_tab.setAttribute('style', 'display: block');
    window.scrollTo(0,680);
})

const img_buts = document.querySelectorAll('.gameTab > img');

function checkForWinner(myTally, compTally) {
    let res = document.querySelector('#solution');
    if (myTally == N) {
        alert("Congratulation!! You Won");
        starter();
    }
    else if (compTally == N) {
        alert("You Lose!! Better luck next time");
        starter();
    }
}

img_buts.forEach(img_but => {
    img_but.addEventListener('click', ()=>{
        let rand = Math.floor(Math.random()*3);
        document.getElementById("textbox").innerHTML = "<img src='image/" + arr[rand] + ".png' alt='" + arr[rand] + "'></img>";
        computerSelect = arr[rand];
        
        playerSelect = img_but.getAttribute('alt');
        document.getElementById("mytext").innerHTML = "<img src='image/" + playerSelect + ".png' alt='" + playerSelect + "'></img>";
        
        let res = playtictactoe(computerSelect, playerSelect);
        document.getElementById("solution").innerHTML = res;

        let myTally = parseInt(myScores.innerText);
        let compTally = parseInt(compScores.innerText);
        if(res == 'Won'){
            myTally += 1;
            myScores.innerText = myTally;
        }
        else if(res == 'Lose'){
            compTally += 1;
            compScores.innerText = compTally;
        }
        checkForWinner(myTally, compTally);
    })
})

function playtictactoe(computer, player){
    let result;
    if (computer == "rock") {
        if (player == "paper")
            result = "Won";
        else if (player == "scissor") 
            result = "Lose";
        else
            result = "Draw";
    } else if(computer == "paper") {
        if (player == "scissor")
            result = "Won";
        else if (player == "rock") 
            result = "Lose";
        else
            result = "Draw";
    } else{
        if (player == "rock")
            result = "Won";
        else if (player == "paper") 
            result = "Lose";
        else
            result = "Draw";
    }
    return result;
}

