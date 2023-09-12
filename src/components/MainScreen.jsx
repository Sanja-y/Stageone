import React, { useState } from 'react'
import { VideoFeed, ExamScreen, StartScreen, Timer } from "./index"
const MainScreen = (props) => {
  const { questions, questionNumber, setQuestionNumber, start, setStart, noOfQuestions, isRunning, setIsRunning, minutes, seconds, setMinutes, setSeconds } = props
  console.log(questions[`question_${questionNumber}`]?.type?.toLowerCase())
  console.log("statrt", questions)

  return (
    // <div className={ start !==true ? 'flex flex-row bg-[#202124] py-[20px] px-[25px]': questions[`question_${questionNumber}`]?.type?.toLowerCase()==="video" ? "flex flex-row bg-[#202124] py-[20px] px-[25px]" : 
    // "bg-[rgb(32,33,36)] flex flex-col pb-[10px]"}>

    //        {start!==true ? ( <VideoFeed start={start} setStart={setStart} questions={questions} questionNumber={questionNumber} /> ) :
    //         questions[`question_${questionNumber}`]?.type?.toLowerCase() ==="video" ? 
    //         (<VideoFeed start={start} setStart={setStart} questions={questions} questionNumber={questionNumber} /> ) :
    //         (<div className=' flex flex-row justify-between'>
    //            <VideoFeed start={start} setStart={setStart} questions={questions} questionNumber={questionNumber} /> <div>Timer</div>
    //         </div>)
    //       }

    //       {start !== true ? (<StartScreen questions={questions} questionNumber={questionNumber} 
    //       setQuestionNumber={setQuestionNumber} start={start} setStart={setStart}
    //        noOfQuestions={noOfQuestions}
    //        isRunning={isRunning}
    //       setIsRunning={setIsRunning}/>):
    //       (
    //       <ExamScreen questions={questions} questionNumber={questionNumber}
    //        setQuestionNumber={setQuestionNumber} start={start} 
    //        setStart={setStart} noOfQuestions={noOfQuestions}
    //        isRunning={isRunning}
    //       setIsRunning={setIsRunning}
    //       seconds={seconds}
    //       minutes={minutes}
    //       setMinutes={setMinutes}
    //       setSeconds={setSeconds} />
    //        )}
    // </div>
    <div>
      {
        start !== true ?
          (<div className='flex flex-row bg-[#202124] py-[20px] px-[25px]'>
            <VideoFeed start={start} setStart={setStart} questions={questions} questionNumber={questionNumber} />
            <StartScreen questions={questions} questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber} start={start} setStart={setStart}
              noOfQuestions={noOfQuestions}
              isRunning={isRunning}
              setIsRunning={setIsRunning} />
          </div>)
          :
          questions[`question_${questionNumber}`]?.type?.toLowerCase() !== "video" ?

            (<div className="bg-[rgb(32,33,36)] flex flex-col">
              <div className=' flex flex-row justify-between'>
                <VideoFeed start={start} setStart={setStart} questions={questions} questionNumber={questionNumber} />
                {/* <Timer
                  isRunning={isRunning}
                  setIsRunning={setIsRunning}
                  minutes={minutes}
                  setMinutes={setMinutes}
                  seconds={seconds}
                  setSeconds={setSeconds}
                /> */}
              </div>
              <ExamScreen questions={questions} questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber} start={start}
                setStart={setStart} noOfQuestions={noOfQuestions}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                seconds={seconds}
                minutes={minutes}
                setMinutes={setMinutes}
                setSeconds={setSeconds} />
            </div>

            )
            :
            (
              <div className=' bg-[#202124] py-[20px] px-[25px]'>
                <div className='flex flex-col justify-end items-end'>
                  {/* <Timer
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    minutes={minutes}
                    setMinutes={setMinutes}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    /> */}
 </div>
                <div className='flex flex-row'>
                  <VideoFeed start={start} setStart={setStart} questions={questions} questionNumber={questionNumber} />
                  <ExamScreen questions={questions} questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber} start={start}
                    setStart={setStart} noOfQuestions={noOfQuestions}
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    seconds={seconds}
                    minutes={minutes}
                    setMinutes={setMinutes}
                    setSeconds={setSeconds} />
                </div>
              </div>
            )
      }
    </div>
  )
}

export default MainScreen