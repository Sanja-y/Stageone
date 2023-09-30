import React, { useState } from 'react'
import { VideoFeed, ExamScreen, StartScreen, Timer } from "../index"
const MainScreen = (props) => {
  const { questions, questionNumber, setQuestionNumber, start, setStart, noOfQuestions, isRunning, setIsRunning, minutes,
    seconds, setMinutes, setSeconds, recording, setRecording,
    handleStartCaptureClick, handleStopCaptureClick, mainTime,
    setMainTime } = props
 // console.log(questions[`question_${questionNumber}`]?.type?.toLowerCase())
 // console.log("statrt", questions)
 {/* Switches to the display the questions once the user has prompted to start the interview  */}
  return (

    <div className='bg-[#F5F5F5] w-full h-full p-3 relative'>

      <div className={start === false ? "flex flex-row" :
        questions[`question_${questionNumber}`]?.type?.toLowerCase() === "video" ? "flex flex-row" : "flex flex-col"}>


       
        {
          start === false ?
          // Prompt the user to start the interview
            (<div className='w-[100%]'>
              <StartScreen questions={questions} questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber} start={start} setStart={setStart}
                noOfQuestions={noOfQuestions}
                isRunning={isRunning}
                setIsRunning={setIsRunning} recording={recording}
                setRecording={setRecording}
                handleStartCaptureClick={handleStartCaptureClick}
                handleStopCaptureClick={handleStopCaptureClick}
                mainTime={mainTime}
                setMainTime={setMainTime} />
            </div>)
            :

            (<>
            {/* Timer for each question */}
              <div className='w-[20%] flex justify-end items-end absolute right-0'>
                <Timer
                  isRunning={isRunning}
                  setIsRunning={setIsRunning}
                  minutes={minutes}
                  setMinutes={setMinutes}
                  seconds={seconds}
                  setSeconds={setSeconds}

                />
              </div>
              <div className='w-[100%] flex flex-col justify-start items-start'>
                {/*Questionnaire screen */}
                <div className='w-[100%] h-[100%]'>
                  <ExamScreen questions={questions} questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber} start={start}
                    setStart={setStart} noOfQuestions={noOfQuestions}
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    seconds={seconds}
                    minutes={minutes}
                    setMinutes={setMinutes}
                    setSeconds={setSeconds}

                  />
                </div>
              </div>
            </>)
        }

      </div>
    </div >
  )
}

export default MainScreen