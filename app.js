const quizData=[
    {
        question:'Which batsman holds the embarrassing distinction of being run-out most often in ODI cricket?',
        a:'Rahul Dravid',
        b:'Inzamam-ul-Haq',
        c:'Brendon McCullum',
        d:'Marvan Atapattu',
        correct:'d'
    
    },
    {
        question:'Suresh Raina has scored one IPL hundred. However, he was denied a hundred by an error on a previous instance, and had to return for 98. What was the error?',
        a:'He was given out off a no-ball',
        b:'The scorers made a counting error',
        c:'His helmet fell on the stumps',
        d:'His partner ran him out',
        correct:'b'
    
    },
    {
        question:'Dilani Manodara in 2010 created a dubious record. What was it?',
        a:'First cricketer to be dismissed timed out',
        b:'First women cricketer to be out handled the ball',
        c:'First cricketer to be dismissed Retired Out in ODIs',
        d:'First women cricketer to be out obstructing the field',
        correct:'c'
    
    },
    {
        question:'Only batter to be dismissed to be dismissed in two dubious ways - Obstructing the field and Handled the ball?',
        a:'Len Hutton',
        b:'Mohinder Amarnath',
        c:'Steve Waugh',
        d:'Graham Gooch',
        correct:'b'
    
    },
];

// console.log(Math.floor(Math.random()*quizData.length)); 
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswers() 
    const currentQuizData = quizData[currentQuiz];
    

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){ 
    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        console.log(answerEl.id);
        if(answerEl.checked){
            answer= answerEl.id;
        }
    })
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked= false;
            
    })
}


submitBtn.addEventListener('click',()=>{
    
        const answer = getSelected();
        console.log(answer)

        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;

            if(currentQuiz < quizData.length){
                loadQuiz();
            }else{
                quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length}</h2>
                <button onclick='location.reload()'>Reload</button>
                `;
               
            }
        }

})

