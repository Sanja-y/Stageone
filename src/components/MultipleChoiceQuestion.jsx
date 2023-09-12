import React from 'react'

const MultipleChoiceQuestion = (props) => {
  const {questions, questionNumber} = props
  let key = "question_"+questionNumber
    if(typeof questionNumber !== "undefined" && Object.entries(questions[key]).length>0 && questions[key]?.type?.toLowerCase()==="mcq")
    {
      return (
        <div className='flex flex-col text-white text-left'>
            {
              questions[key]?.options?.map((answer)=>{
                return(
                    <ul >
                     <li> 
                      <input type='radio' placeholder={answer} /> <label>{answer}</label>
                    </li>
                    </ul>
                )
              })
            }
        </div>
      )
    }
    else{
      return(
        <></>
      )
    }
}

export default MultipleChoiceQuestion