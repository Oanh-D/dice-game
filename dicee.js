
var x = document.getElementsByClassName("container")[0];

x.addEventListener("click", mainFunction);
// alert();
// x.addEventListener("click", draw);

function mainFunction (){
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    // alert(randomNumber1);
    switch (randomNumber1) {
        case 1 :
            document.getElementsByClassName("img1")[0].src = "dice1.png";
            break;
        case 2 :
            document.getElementsByClassName("img1")[0].src = "dice2.png";
            break;
        case 3 :
            document.getElementsByClassName("img1")[0].src = "dice3.png";
            break;
        case 4 :
            document.getElementsByClassName("img1")[0].src = "dice4.png";
            break;
        case 5 :
            document.getElementsByClassName("img1")[0].src = "dice5.png";
            break;
        case 6:
            document.getElementsByClassName("img1")[0].src = "dice6.png";
            break;
    }

    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    switch (randomNumber2) {
        case 1 :
            document.getElementsByClassName("img2")[0].src = "dice1.png";
            break;
        case 2 :
            document.getElementsByClassName("img2")[0].src = "dice2.png";
            break;
        case 3 :
            document.getElementsByClassName("img2")[0].src = "dice3.png";
            break;
        case 4 :
            document.getElementsByClassName("img2")[0].src = "dice4.png";
            break;
        case 5 :
            document.getElementsByClassName("img2")[0].src = "dice5.png";
            break;
        case 6:
            document.getElementsByClassName("img2")[0].src = "dice6.png";
            break;
    }

    randomNumber1 > randomNumber2 ? document.querySelector("h1").innerHTML = "🚩 Player 1 wins!" 
        : randomNumber1 === randomNumber2 ? document.querySelector("h1").innerHTML = "Draw!" 
        : document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";

    // if (randomNumber1 > randomNumber2){
    //     document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
    // }
    // else if (randomNumber1 === randomNumber2){
    //     document.querySelector("h1").innerHTML = "Draw!";
    // }
    // else {
    //     document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
    // }
}

// function draw (){
//     document.querySelector("h1").innerHTML = "Draw!";
// }

