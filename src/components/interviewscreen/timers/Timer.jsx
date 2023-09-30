import React, { useState, useEffect } from 'react'
import "./Timer.css"
import ProgressBar from '@ramonak/react-progress-bar';
import { Modal } from 'antd';
const Timer = (props) => {
  // const [minutes, setMinutes] = useState(10);
  // const [seconds, setSeconds] = useState(0);
  const { isRunning, setIsRunning, seconds, setSeconds,
    minutes, setMinutes, zero, setZero, alert, setAlert } = props

  useEffect(() => {
    let timer;
    console.log(isRunning)
    if (isRunning) {
      timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          // You can add a sound or notification here
          setIsRunning(false);
          // setZero(true)
          resetTimer();
        } else {
          if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
          // if(seconds === 10)
          // {     
          //     setAlert(true)
          // }
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(true);
    setMinutes(10);
    setSeconds(0);
  };
  const gaugePercentage = ((minutes * 60 + seconds) / (10 * 60)) * 100
  // document.addEventListener("DOMContentLoaded", function () {
  //   const gaugePercentage = 75; // Replace with your actual gaugePercentage value
  //   const line = document.querySelector(".circle");

  //   if (line) {
  //     const strokeWidth = (gaugePercentage / 100) * 120; // Adjust the multiplier as needed
  //     line.setAttribute("stroke-width", strokeWidth);
  //   } else {
  //     console.error("The .circle element was not found.");
  //   }
  // });
  return (
    <div className='text-secondary flex flex-col'>

      <div>
        <div className='time-gauge relative inline-flex  items-center justify-center '>
          <svg viewBox="0 0 36 36" class="circular-chart orange">
            <path class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          width={"100"}
            />
            <path class="circle"
              stroke={gaugePercentage > 50 ? "#44CD2E" : gaugePercentage > 25 ? "#F1CD4B" : "#F44545"}
              stroke-dasharray={`${gaugePercentage},100`}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          width={"100"}
            />


          </svg>

        </div>
        {/* <ProgressBar completed={gaugePercentage} maxCompleted={100}
          bgColor={gaugePercentage > 50 ? "#44CD2E" : gaugePercentage > 25 ? "#F1CD4B" : "#F44545"}
          customLabel=' '
          className='question-timer'
          height='10'
        /> */}
        <div className=' flex flex-row justify-between'>
          <h1 className='text-black mr-[10px]'>Time Remaining: </h1>
          <text x="10" y="20" className="text-[15px] mr-[8px] font-bold text-black">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</text>
        </div>
      </div>
      {/* {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={stopTimer}>Stop</button>
      )}
      <button onClick={resetTimer}>Reset</button> */}
    </div>
  );

}

export default Timer