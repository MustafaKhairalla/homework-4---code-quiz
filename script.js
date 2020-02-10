var startBtn = document.getElementById("start-btn");
var qSection = document.getElementById("Q")
var mSection = document.getElementById("start-scr")
var fSection = document.getElementById("final");
//counters
var questionsIndex = 0;
var qCounter = 0;
var lenght = questions.length;

var inicialsArr = [];


var counter = 0;
//preseting the questions vars
var qtitle = questions[questionsIndex].title;
var qChoices = questions[questionsIndex].choices[counter];
var qAnswer = questions[questionsIndex].answer;

var timeEl = document.getElementById("time");
var timer;

var game = 0;
var time = questions.length * 15;

var score = 0;
var scoreEl = document.getElementById("score");
var scoreFinalel = document.getElementById("scoreFinal");

var getInicial = document.getElementById("inicial").value;
var highScore = document.getElementById("highScore");
var lowBtn = document.getElementById("lowBtns");


var finalEl = document.getElementById("final");

startBtn.onclick = startQuiz;

function startQuiz(){
    startBtn.classList.add("hide");
    mSection.classList.add("hide");
    qSection.classList.remove("hide")
    startGame();
    setScore();
}

function startGame(){
    timer = setInterval(timerDown , 1000);
    timeEl.textContent = ("time ") + time;
    presentQuestions();
    
}

function presentQuestions(){
    var currentQ = questions[questionsIndex];
    var titleElement = document.getElementById("titleOfq");
    titleElement.textContent = currentQ.title;

    for(var i=0 ; i < questions[questionsIndex].choices.length ; i++){
        var answer = document.createElement("button");
        answer.setAttribute("class" , "btnChoice");
        answer.setAttribute("value" , questions[questionsIndex].choices[i]);
        answer.textContent = questions[questionsIndex].choices[i];

        qSection.appendChild(answer);
        console.log(answer.textContent)
    }
    addlister();
    
     
    //console.log('1')
     
     
}

function addlister(){
   // var adds = document.getElementsByClassName('btnChoice');
   // adds.addEventListener("click",check, false );
   console.log('2')
    $(".btnChoice").click(function(){
        //console.log(this.value)
        var answerChoice = this.value;
        //console.log("answer is " + answerChoice);
        //console.log(score);
        if (answerChoice == qAnswer){
            score = score + 1;
            setScore()
        }else{
            time = time -15;
            timeEl.textContent = ("time ") + time;
        }
        
        questionsIndex++;
        $(".btnChoice").remove();
        
        check();
        presentQuestions()
        
      });
    }
    
function check(){
    if(questionsIndex == questions.length){
        qSection.classList.add("hide");
        fSection.classList.remove("hide")
        scoreFinalel.textContent = (score);
        clearInterval(timer);
        inicialListener();

   }
}

function timerDown(){
    time--;
    timeEl.textContent = ("time ") + time;
}

function setScore(){
    scoreEl.textContent = ("score ") + score;
}

function endgame(){
    //qSection.classList.add("hide")
    var finalResult = document.createElement("h1");

}

function getHighScore(){

}

//listen to inicial submit button
function inicialListener(){
    $(".submitInicial").click(function(){
        highScore.classList.remove("hide");
        lowBtn.classList.remove("hide");
        fSection.classList.add("hide");
        var getInicial = document.getElementById("inicial").value;
        inicialsArr.push(getInicial + " - score:  " + score);
        localStorage.setItem("ini", JSON.stringify(inicialsArr));
        console.log(inicialsArr);
        inicilaEl = document.createElement("li");
        inicilaEl.textContent = (getInicial + " - score:  " + score);
        highScore.appendChild(inicilaEl);
        clearLocalStorage();
        goBack();

    })

}

var clearing = document.getElementById("clearStorage");

function clearLocalStorage(){
    $(".ClearStorage").click(function(){
        localStorage.clear();
    })
}

var goingBack = document.getElementById("GoBack");

function goBack(){
    $(".Go-Back").click(function(){
        // lowBtn.classList.add("hide");
        // highScore.classList.add("hide");
        // startBtn.classList.remove("hide");
        // qSection.classList.remove("hide")
        // resetTime()
        // startGame();
        // setScore();
        // reloadThepage()
        window.location.reload();
        
    })
}

function resetTime(){
    time = 0;
    time = questions.length * 15;
}

function reloadThepage(){
    location.reload();
    return false;
}

function getScores(){
    
}