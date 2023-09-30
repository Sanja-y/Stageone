import React from 'react'
import camera from "../../../assets/video 1.svg"
const StartScreen = (props) => {
  const { start, setStart, questions, questionNumber, setQuestionNumber, noOfQuestions, setIsRunning, setRecording,  mainTime,
  setMainTime,handleStartCaptureClick, handleStopCaptureClick, } = props
  return (
    <div className='bg-white w-[100%] h-[29rem] overflow-hidden ml-0 rounded-[10px] relative'>
      <div className='text-[24px] text-secondary text-center flex flex-col justify-center'>
        <h3>You have to answer
          <br /><span className='text-tertiary font-extrabold'> {noOfQuestions} Questions </span>
          in a time period of
          <br /> <span className='text-tertiary font-extrabold'> {noOfQuestions * 10} minutes </span>
        </h3>
      </div>

      <div className='my-[40px] flex justify-center items-center'>
        <p className='text-tertiary'><span className='font-extrabold'>Note: </span>
          You will get 10 minutes to answer each question</p>
      </div>
      <div className='flex flex-col items-center absolute bottom-[20px] left-0 right-0 mx-auto'>
        <button className='bg-tertiary text-white text-[18px] 
              w-[80%] py-[12px] px-[6px] rounded-[8px]
               shadow-xl font-extrabold m-[2px] 
               hover:shadow-[0] hover:opacity-80 '
          onClick={() => { setStart(true); setIsRunning(true); setRecording(true) ;setMainTime(true); console.log("start rec") }}><span className='flex flex-row justify-center'><img src={camera} width="20" height="20" className='mx-2' />{start ? "Stop" : "Start"} Recording</span></button>
      </div>
    </div>
  )
}

export default StartScreen
