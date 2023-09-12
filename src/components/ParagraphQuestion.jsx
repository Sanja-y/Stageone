import React from 'react'

const ParagraphQuestion = (props) => {
  const {questions, questionNumber} = props
  let key = "question_"+questionNumber
    if(typeof questionNumber !== "undefined" && Object.entries(questions[key]).length>0 && questions[key]?.type?.toLowerCase()==="text")
    {
      return (
        <div>
            
                    <div className='flex flex-row text-secondary justify-left '>
                      <textarea type='text' className='h-[25vh] w-full p-7 bg-white text-black' placeholder='Enter answer here' />
                    </div>
                
              
        </div>
      )
    }
    else{
      return(
        <></>
      )
    }
}

export default ParagraphQuestion