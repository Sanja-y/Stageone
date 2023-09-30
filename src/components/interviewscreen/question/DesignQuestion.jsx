import React, { useState } from 'react'

const DesignQuestion = (props) => {
  const {questions, questionNumber} = props
  const [design1clicked, setDesign1Clicked] = useState(false)
  const [design2clicked, setDesign2Clicked] = useState(false)
  
  let key = "question_"+questionNumber
  
    if(typeof questionNumber !== "undefined" && Object.entries(questions[key]).length>0 && questions[key]?.type?.toLowerCase()==="design")
    {
      return (
        <div className='flex flex-row justify-center items-center'>
            {
              questions[key]?.designs.map((design, index)=>{
                return(
                    <div className=''>
                      <img className="m-5"src={design} width="300" height="300" id={index} />
                    </div>
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

export default DesignQuestion