var score = 0;
var banner = document.querySelector(".banner");
var question = document.querySelector(".question");
var highscore = document.querySelector(".highscore")
var buttonsrow = document.querySelector(".buttons");
var timer = document.querySelector(".timer");
var timerInterval;
var cw = document.querySelector(".cw");
var cwtime = 2;
var seconds = 180;
var a1;
var a2;
var a3;
var a4;

// Quiz opening page
function quizopening() {
    highscore.style.visibility = "hidden";

    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Start Quiz";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        question1();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "View Scores";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        scorepage();
    });
}
quizopening();

// Timer set up
function countdown() {
    timerInterval = setInterval(function() {
    seconds --;
    timer.textContent = "Time left: " + seconds;
        if (seconds <= 0) {
            clearInterval (timerInterval);
            seconds = 0;
            timer.textContent = "Time left: 0"
            postquiz();
        }
    }, 1000);
}

// Bonus= add the time to your score
function timepoints() {
    score += seconds;
}

// Correct answer response= Correct text will display

// Correct text display.
function correctcw() {
    var yesInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color: rgb(112, 177, 112)")
    cw.textContent = "Correct c: !";
        if (cwtime <= 0) {
            clearInterval (yesInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 350);
}

// Wrong answer response.
function wrong() {
    seconds -=15;
}

// Wrong text display.
function wrongcw() {
    var noInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color:rgb(185, 80, 80)");
    cw.textContent = "Wrong :c !";
        if (cwtime <= 0) {
            clearInterval (noInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 350);
}

// Q #1 
function question1() {
    a1.remove();
    a2.remove();
    countdown();
    question.textContent = "Name a visual programming language";
        
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Function";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Command";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Debugging";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Scratch";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        correctcw();
        question2();
        correct();

    });
}

// Q #2
function question2() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "What is a list of steps to finish a task?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Loop";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Algorithm";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        correctcw();
        question3();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Loop";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Event";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
}

// Q #3
function question3() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which of the following is not considered a JavaScript operator?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "new";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "this";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        correctcw();
        question4();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "delete";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "typeof";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
}

// Q #4
function question4() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "JavaScript is interpreted by ____";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Client";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        correctcw();
        question5();
        correct();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Server";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Oject";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "None of these";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });
}

// Q #5
function question5() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "____method evaluates a string of JavaScript code in the context of the specified object.";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Evparse";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Parsclick";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "ParseInt";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Eval";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        correctcw();
        question6();
        correct();
    });
}

// Q #6
function question6() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "The C in CSS stands for: ";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Cursive";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question7()
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Coded";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question7()
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Cascading";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        correctcw();
        question7();
        correct();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Coding";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question7()
        wrong();
    });
}

// Q #7
function question7() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "HTML is in charge of the ___";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Content";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        correctcw();
        question8();
        correct();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Colors";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question8()
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Size";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question8()
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Function";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question8()
        wrong();
    });
}

// Q #8
function question8() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "If . represents class, # represents ___";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Number";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question9()
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Id";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        correctcw();
        question9();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Pound";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question9()
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Hash";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question9()
        wrong();
    });
}

// Q #9
function question9() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which of the following is NOT a loop?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "for";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question10()
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "while";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question10()
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "do-while";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question10()
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "don't";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        correctcw();
        question10();
        correct();
    });
}

// Q #10
function question10() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Inside which HTML element (< >) do we put the JavaScript?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "js";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrong();
        wrongcw();
        postquiz();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "scripting";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrong();
        wrongcw();
        postquiz(); 
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "script";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        correctcw();
        postquiz();
        correct();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "javascript";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrong();
        wrongcw();
        postquiz();
    });
}

// Post-quiz
function postquiz() {
    timepoints();
    seconds = 0; 
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    highscore.style.visibility = "visible";
    question.textContent = "Quiz Complete! Your score is " + score + ". Please enter your name below."
    
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Submit";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        localStorage.setItem("user", highscore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
}

// High score page
function scorepage() {
    clearInterval (timerInterval);
    a1.remove();
    a2.remove();
    highscore.style.visibility = "hidden";
    banner.textContent = "High Scores"
    
    question.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("score");
    
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Restart Quiz";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        location.reload();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Clear Scores";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        localStorage.clear();
        question.textContent = "";
    });
}