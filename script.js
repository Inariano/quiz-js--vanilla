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
const $HTML = document.body;

let currentQuestion = 0

/////////função de inicio do quiz 
StartQuestions()
  
function 
  StartQuestions ()
   { 
     const $Body = document.createElement('main');
      $HTML.appendChild($Body)

     const $BtnStartQuestion    = document.createElement('button')
     const contentStartQuestion = document.createTextNode("START")

       $Body.appendChild($BtnStartQuestion)
       $BtnStartQuestion.appendChild(contentStartQuestion)

         $BtnStartQuestion.addEventListener("click" ,() => 
           {
         
            
             Question()  
             $Body.style.display = "none" 
             
         
        
            } )
   } 


////////////funçao criadora de questoes /////////
               
function 
   Question()
   {
     const Question = Questions[currentQuestion]
     const $Body = document.createElement('main');
     $HTML.appendChild($Body)
     const $DivQuestion = document.createElement('div')
     let contentQuestion = document.createTextNode(Question.question)

       $Body.appendChild($DivQuestion)
       $DivQuestion.appendChild(contentQuestion)

       Question.answers.forEach(answer => 
        {
          let $BtnAnswer = document.createElement('button')
          let contentAnswer= document.createTextNode(answer.answer) 

           $Body.appendChild($BtnAnswer)
           $BtnAnswer.appendChild(contentAnswer)
             $BtnAnswer.addEventListener( "click" ,()=>
              { NextQuestion() 
                $Body.style.display = "none" 
              }
                                        )
         }
                                  )
 

     }

////////função chama a proxima questao da lista /////

function NextQuestion(){
  currentQuestion++
  if(currentQuestion<Questions.length){
  
    Question()
  
  }else{
    Finish() 
  }
}
//////////função finalizar ou reiniciar //////////
function Finish(){

  const $Body = document.createElement('main');
  $HTML.appendChild($Body)
  const $BtnFinishTry = document.createElement('button')
  const contentFinishTry = document.createTextNode('try again')
  const $BtnFinish = document.createElement('button')
  const contentFinish = document.createTextNode('RESTART')

  $Body.appendChild($BtnFinish)
  $BtnFinish.appendChild(contentFinish)
  $Body.appendChild($BtnFinishTry)
  $BtnFinishTry.appendChild(contentFinishTry)

  currentQuestion=0
  
  $BtnFinish.addEventListener('click',() => {
    
   
    StartQuestions()
    $Body.style.display = "none" 
   
  })

  $BtnFinishTry.addEventListener('click',() => {
    
   
  Question()
    $Body.style.display = "none" 
   
  })
}



