import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import Popup from 'reactjs-popup'
import success from "../assets/accept 1.svg"
 import { ToastContainer , toast} from 'react-toastify'
//import { Toast } from 'react-toastify/dist/components'
//import { toast } from 'react-hot-toast'
import {VideoQuestion, DesignQuestion, ProgrammingQuestion, ParagraphQuestion, MultipleChoiceQuestion, DebuggingQuestion} from "./index"
const ExamScreen = (props) => {
  const[end, setEnd] = useState(false)
  
  const {questions, questionNumber, setQuestionNumber, noOfQuestions, start, setStart, isRunning, setIsRunning, minutes, seconds ,setMinutes, setSeconds} = props
  const [zero, setZero] = useState(false);
  const [alert, setAlert] = useState(false);
  
  useEffect ((alert)=>{
    if(alert === true)
    {
      toast("Error")
    }
  },[])

  const resetTimer = () => {
    setIsRunning(true);
    setMinutes(10);
    setSeconds(0);
  };
  const stopTimer = () =>{ 
    setIsRunning(false)
  };

 
  if(zero === true)
  {
    if(questionNumber === noOfQuestions)
    {
      stopTimer();
      setStart(false)
    }
    else
    {
      setQuestionNumber(prevValues=>prevValues+1);
      setZero(false)
    }
  
  }

  let key = "question_"+questionNumber
  console.log("number", questions[key])
  if(typeof questionNumber !== "undefined" && Object.entries(questions[key]).length>0)
  {
    return (
  
      <div className={questions[key]?.type?.toLowerCase() === "video" ? "startScreen": " examScreen bg-black"}> 
      {/* Instructions for the exam */}
              {/* <div className='flex flex-col justify-end items-end'>
                <Timer 
                 isRunning ={isRunning}
                 setIsRunning={setIsRunning} 
                 resetTimer={resetTimer}
                 minutes={minutes}
                 setMinutes={setMinutes}
                 seconds={seconds}
                 setSeconds={setSeconds}
                 stopTimer={stopTimer}
                 zero={zero}
                 setZero={setZero}
                 alert={alert}
                 setAlert={setAlert}/>
              </div>
           */}
              <h3 className={questions[key]?.type?.toLowerCase() ===  "video"  ? 'text-[24px] text-center text-secondary mt-[50px] mb-[40px] font-bold' :
              'text-[24px] text-left text-white mt-[50px] mb-[40px] font-bold'}>{questions[`question_${questionNumber}`]?.question}</h3>
                
               <div className='text-center m-[0px]'>
                {
                    
                    questions[key]?.type?.toLowerCase() === "design" ?
                    (<DesignQuestion questions={questions} questionNumber={questionNumber}/>) :
                    questions[key]?.type?.toLowerCase() === "mcq" ?
                    (<MultipleChoiceQuestion questions={questions} questionNumber={questionNumber}/>) :
                    questions[key]?.type?.toLowerCase() === "programming" ?
                    (<ProgrammingQuestion questions={questions} questionNumber={questionNumber} />) :
                    questions[key]?.type?.toLowerCase() === "text"  ? 
                    (<ParagraphQuestion questions={questions} questionNumber={questionNumber} />) :
                    questions[key]?.type?.toLowerCase() === "video" ? 
                    (<VideoQuestion questions={questions} questionNumber={questionNumber}/>) :
                    questions[key]?.type?.toLowerCase() === "debugging" ? 
                    (<DebuggingQuestion questions={questions} questionNumber={questionNumber}/>) :
                    <div> 
                      <h4>Invalid Data</h4> 
                    </div>
                    
                        
              }
                            
              </div>
              
   
           
          </div>
    
    )
  }
 else
 {
  return(
    <></>
  )
 } 
}

export default ExamScreen