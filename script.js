////array de perguntas//////
const Questions =[ 
                   {question:"1+0", 
                    answers:[
                     {answer:"1", correct: true },
                     {answer:"2", correct: false },
                     {answer:"3", correct: false },
                    ]},
                   {question:"1+1", 
                    answers:[
                     {answer:"1", correct: false},
                     {answer:"2", correct: true  },
                     {answer:"3", correct: false},
                    ]},
                   {question:"1+2", 
                    answers:[
                     {answer:"1", correct: false},
                     {answer:"2", correct: false },
                     {answer:"3", correct: true },
                    ]},
                 ]
/////////elemento global /////////////////
const $Body = document.body;
let currentQuestion = 0

StartQuestions()
  
function StartQuestions (){
  
 
  const $BtnStartQuestion    = document.createElement('button')
  const contentStartQuestion = document.createTextNode("START") 
  document.body.appendChild($BtnStartQuestion)
$BtnStartQuestion.appendChild(contentStartQuestion)
$BtnStartQuestion.addEventListener("click" ,() => Question() )
                 } 


////////////fuçao criadora de questoes /////////
               
function Question(){
  const Question = Questions[currentQuestion]

  const $DivQuestion = document.createElement('div')
  const contentQuestion = document.createTextNode(Question.question)
  $Body.appendChild($DivQuestion)
  $DivQuestion.appendChild(contentQuestion)
  Question.answers.forEach(answer => {
    let $BtnAnswer = document.createElement('button')
    let contentAnswer= document.createTextNode(answer.answer) 
    $Body.appendChild($BtnAnswer)
    $BtnAnswer.appendChild(contentAnswer)
    $BtnAnswer.addEventListener( "click" ,()=>{ NextQuestion() 
      
    })
  })
 

}

////////função chama a proxima questao da lista /////

function NextQuestion(){
  currentQuestion++
  if(currentQuestion<=Questions.length){
  
    Question()
  
  }else{
 
  }
}




