import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar';
const CompletionBar = (props) => {
    const {questions, questionNumber, noOfQuestions, start} = props;
    let progress = Math.floor((questionNumber/noOfQuestions)*100);
    console.log(progress)
    return (
      <div className='flex flex-col mb-10'>
          {start === true ? <h4 className='text-secondary font-bold'>{questionNumber}/{noOfQuestions} Questions</h4> :
          <h4 className='text-secondary  font-bold'>{noOfQuestions} Questions</h4>}
          <div className={`border-box border-solid border-0 bg-box w-[100%] h-[20px] relative`} >
            {start === true ? <ProgressBar completed={progress} maxCompleted={100} bgColor='#44CD2E' borderRadius='0' />:<div />}
          </div>
          
      </div>
    )
}

export default CompletionBar