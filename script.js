
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
/////////elemento global ///////////////////
const $Body = document.body;
StartQuestions()
  //////////
function StartQuestions (){
  
 
  const $BtnStartQuestion    = document.createElement('button')
  const contentStartQuestion = document.createTextNode("START") 
  document.body.appendChild($BtnStartQuestion)
$BtnStartQuestion.appendChild(contentStartQuestion)
$BtnStartQuestion.addEventListener("click" ,() => Question() )
                 } 

                 

//


