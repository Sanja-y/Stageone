import React,{useEffect} from 'react'

const MainTimer = (props) => {
  const {isRunning, setIsRunning, seconds, setSeconds, 
    minutes, setMinutes, zero, setZero, alert, setAlert} = props
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
          //resetTimer();
        } else {
          if (seconds === 0) {
            setMinutes((prevMinutes)=>prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds)=>prevSeconds - 1);
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
  return (
    <div className='flex flex-col font-bold justify-end'>
            <h4 className='text-tertiary text-[24px]'>50:00</h4>
            <p>Remaining</p>
    </div>
  )
}

export default MainTimer