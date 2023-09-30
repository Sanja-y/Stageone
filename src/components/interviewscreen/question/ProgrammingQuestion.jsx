import React from 'react'
import { Editor } from '@monaco-editor/react'
const ProgrammingQuestion = (props) => {
  const {questions, questionNumber} = props
  let key = "question_"+questionNumber
    if(typeof questionNumber !== "undefined" && Object.entries(questions[key]).length>0 && questions[key]?.type?.toLowerCase()==="programming")
    {
      return ( 
                   
          <div className='flex m-[2px] flex-row justify-around text-secondary'>
              <Editor
                    height="450px"
                    language="java"
                    theme="vs-light"
                    value={"Write your code here"}
                    options={{
                        inlineSuggest: true,
                        fontSize: "16px",
                        formatOnType: true,
                        autoClosingBrackets: true,
                        //minimap: { scale: 10 }
                    }}
                  
                />
           </div>

      )
    }
    else{
      return(
        <></>
      )
    }
}

export default ProgrammingQuestion