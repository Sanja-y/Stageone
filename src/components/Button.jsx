import React from 'react'
import Popup from 'reactjs-popup';
import success from "../assets/accept 1.svg"
const Button = (props) => {
  const { setQuestionNumber, resetTimer, questionNumber, noOfQuestions } = props
  return (
    <div className='flex flex-row justify-center relative font-bold bottom-0 left-0 right-0 mx-[20px] mt-[15px]'>
      <Popup
        trigger={<button className='bg-primary border-secondary border-[2px] 
          text-tertiary 
       rounded-[8px] px-[50px] m-[3px] py-[10px]
       hover:opacity-80'>Skip</button>}
        position={'right center'}
        modal
        nested>

        {
          close =>
          (<div className='skip text-center relative font-bold'>
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
      </Popup>
      {questionNumber === noOfQuestions ?
        <Popup

          trigger={
            <button
              id='submit'
              className='bg-tertiary text-primary
         rounded-[8px] px-[40px] py-[10px] m-[3px] hover:opacity-80'
            >
              Submit
            </button>}
          position={'right center'}
          modal
          nested
        >

          {
            close =>
            (<div className='skip text-center relative flex flex-col items-center justify-center'>
              <img src={success} className='mt-3' />
              <h3 className='text-secondary text-[24px] 
             m-auto font-bold'>

                Submitted Successfully
              </h3>

              <p className=''>You can now close the window or tab</p>

            </div>
            )
          }
        </Popup>

        :
        <button
          className='bg-tertiary text-primary  
          rounded-[8px] px-[30px] py-[10px] m-[3px] hover:opacity-80'
          onClick={() => { setQuestionNumber((prevValues) => prevValues + 1); resetTimer() }} >
          Save & Next
        </button> 
      }

    </div>
  )
}

export default Button