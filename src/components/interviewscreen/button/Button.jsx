import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import success from "../../../assets/accept 1.svg"
import { Button as Submit, Modal } from 'antd';
const Button = (props) => {
  const { setQuestionNumber, stopTimer, upload, setUpload, start, recording, setRecording, setStart, resetTimer, questionNumber, mainTime, setMainTime, noOfQuestions, setCapturing, handleStartCaptureClick, handleStopCaptureClick } = props

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);



  };
  const handleOk = () => {

    setIsModalOpen(false);
    setRecording(false)
    stopTimer();
    setMainTime(false)
    console.log("recording=" + recording)

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-row justify-center relative font-bold bottom-0 left-0 right-0 ml-[20px] mt-[6px]'>
      <Popup
        trigger={<button className='bg-primary border-secondary border-[2px] 
          text-tertiary 
       rounded-[8px] px-[50px] m-[3px] py-[10px]
       hover:opacity-80'>Skip</button>}
        position={'right center'}
        modal
        nested>

        {
          close => {
            return (<div className='skip text-center relative font-bold'>
              <h3 className='text-secondary text-[24px] 
          m-auto absolute top-16 left-[36px] font-extrabold'>

                Are you sure you want to skip this question?
              </h3>

              <div className='flex flex-row justify-center absolute bottom-[20px] left-0 right-0' >

                <button className='bg-primary border-tertiary border-[2px] 
             mx-[16px] text-tertiary px-[3px] 
             py-[12px] rounded-[8px] w-[40%]
            hover:opacity-80'
                  onClick={() => { setQuestionNumber((prevValues) => prevValues + 1); close(); resetTimer(); }}>
                  Skip
                </button>

                <button className='bg-tertiary text-primary w-[40%] mx-[16px]
              rounded-[8px] px-[3px] py-[12px] hover:opacity-80'
                  onClick={() => { close() }}>
                  Back
                </button>

              </div>

            </div>
            )
          }
        }
      </Popup>
      {questionNumber === noOfQuestions ?
        // <Popup

        //   trigger={
        //     <button
        //       id='submit'
        //       className='bg-tertiary text-primary
        //  rounded-[8px] px-[40px] py-[10px] m-[3px] hover:opacity-80'
        //     >

        //       Submit
        //     </button>}
        //   position={'right center'}
        //   modal
        //   nested
        // >

        //   {
        //     close =>

        //     {

        //       return(<div className='skip text-center relative flex flex-col items-center justify-center'>
        //       <img src={success} className='mt-3' />
        //       <h3 className='text-secondary text-[24px] 
        //      m-auto font-bold'>

        //         Submitted Successfully

        //       </h3>

        //       <p className=''>You can now close the window or tab</p>

        //     </div>
        //     )}
        //   }
        // </Popup>
        <>
          <Submit type="" onClick={showModal}>
            <div className='bg-tertiary text-primary  
          rounded-[8px] px-[40px] py-[12px] font-semibold text-[14px] flex justify-items-center text-center hover:opacity-80' >
              <p>Submit</p>
            </div>
          </Submit>
          <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className=' text-center relative flex flex-col items-center justify-center'>
              <img src={success} className='mt-3' />
              <h3 className='text-secondary text-[24px] 
             m-auto font-bold flex '>

                Submitted Successfully

              </h3>

              <p className=''>You can now close the window or tab</p>

            </div>
          </Modal>
        </>

        :
        <button
          className='bg-tertiary text-primary  
          rounded-[8px] px-[30px] py-[10px] m-[3px] hover:opacity-80'
          onClick={() => { setQuestionNumber((prevValues) => prevValues + 1); setRecording(false); resetTimer(); }} >
          Save & Next
        </button>
      }

    </div>
  )
}

export default Button