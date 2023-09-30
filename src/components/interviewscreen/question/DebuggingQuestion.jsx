import { Editor } from '@monaco-editor/react'
import React from 'react'

const DebuggingQuestion = (props) => {
    const { questions, questionNumber } = props
    let key = "question_" + questionNumber
    if (typeof questionNumber !== "undefined" && Object.entries(questions[key]).length > 0 && questions[key]?.type?.toLowerCase() === "debugging") {
        return (

            <div className='flex m-[2px] flex-col justify-around text-secondary'>
                {/* <textarea className=' ml-10 h-[30vh] w-full p-7 bg-white text-black' placeholder='Enter program here' /> */}
               
                {console.log(questions[key]?.category)}
                <Editor
                    height="450px"
                    language="java"
                    theme="vs-light"
                    value={questions[key]?.problem_stmt}
                    options={{
                        inlineSuggest: true,
                        fontSize: "16px",
                        formatOnType: true,
                        autoClosingBrackets: true,
                       // minimap: { scale: 10 }
                    }}
                />
            </div>

        )
    }
    else {
        return (
            <></>
        )
    }
}
export default DebuggingQuestion