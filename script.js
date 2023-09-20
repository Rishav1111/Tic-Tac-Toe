console.log("Welcomr to TIc Tac Toe");

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3")
let gameoverMusic = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;


//function to change the turn
const changeTurn = () =>{
    return turn === "X" ? "0": "X"

}

//function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];

    let isDraw = true;

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won';
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw ) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = "20vw";
            isDraw = false; // If a win condition is met, it's not a draw.
        }
    });
    
    if (isDraw) {
        // Check for a draw when all boxes are filled
        let isAllFilled = true;
        for (let i = 0; i < boxtext.length; i++) {
            if (boxtext[i].innerText === '') {
                isAllFilled = false;
                break;
            }
        }
        
        if (isAllFilled) {
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = '300px';
            document.querySelector('.info').innerText = 'It\'s a Draw!';
            gameover = true;
        }
    }
};


//Game logic 

// music.play()


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
            }
            
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText= "";
    });
    turn="X";
    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.img').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = "0vw";
})
