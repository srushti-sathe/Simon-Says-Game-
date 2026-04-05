let gameSeq=[];
let userSeq =[];
let btns = ["red","yellow","green" ,"purple"];
let started = false;
let level = 0;
let highScore = 0;
let score=0;
h2 = document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");
},1000);
}

function levelUp()
{
    
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx)
{

    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
         }, 150);

        score = level;
        if(highScore < score)
        {
            highScore = score;
        }
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>
        Press any key to start.`;
        let highestScore = document.getElementById("score");
        highestScore.innerText=`Higgest Score : ${highScore}`;

        reset();
    }
}

function btnPress()
{
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);

}

allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function reset()
{
    started = false;
    userSeq = [];
    gameSeq=[];
    level=0;
}