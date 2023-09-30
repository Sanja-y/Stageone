import React, { useState, useEffect } from 'react';
import Modal from 'antd/es/modal/Modal';
function MainTimer({ mainTime }) {
  const initialTime = 60 * 60; // 60 minutes in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let timer;

    if (mainTime === true && time > 0) {
      timer = setInterval(() => {
        setTime(time - 1);
      }, 1000); // Update every second
    }

    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts or isActive becomes false
    };
  }, [mainTime, time]);

  // Convert remaining seconds to minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='text-center text-secondary'>
      <h1 className='font-bold text-[18px] '>Interview Timer</h1>


      <div >
        <text style={{"fontSize":"24px","color":"#6830D1","fontWeight":"bold"}}>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</text>
      </div>



    </div>
  );
}

export default MainTimer;
