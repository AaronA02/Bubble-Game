var timer = 60;
var randomHit = 0;
var score = 0;


function makeBubble(){
    var clutter = "";

for(var i = 0; i <= 160; i++){
    var rand = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rand}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}



function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector(".timer").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector(".timer").textContent = "Time's Up!";
            document.querySelector("#pbtm").innerHTML = "";
            document.querySelector("#pbtm").style.display = "none";
        }
    }, 1000);
}


function hitValue(){
    randomHit = Math.floor(Math.random() * 10);
    document.querySelector(".hitValue").textContent = randomHit;
}


function increaseScore(){
    score += 10;
    document.querySelector(".scoreValue").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum == randomHit){
        increaseScore();
        makeBubble();
        hitValue();
    }
})

makeBubble();
hitValue();
runTimer();
