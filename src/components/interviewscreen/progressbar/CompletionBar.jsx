import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar';
const CompletionBar = (props) => {
  const { questions, questionNumber, noOfQuestions, start } = props;
  let progress = Math.floor((questionNumber / noOfQuestions) * 100);
  console.log(progress)
  return (
    <div className='flex flex-col justify-end mb-5 mx-3 '>

      <div className={`border-box border-solid border-0 bg-box w-[100%] h-[20px] rounded-[5px] relative`} >
        {start === true ? <ProgressBar completed={progress} maxCompleted={100} bgColor='#44CD2E' borderRadius='5px' /> : <div />}
      </div>
          {start === true ? <h4 className='text-secondary flex justify-end font-bold'>{questionNumber}/{noOfQuestions} Questions</h4> :
          <h4 className='text-secondary  flex justify-end font-bold'>{noOfQuestions} Questions</h4>}

    </div>
  )
}

export default CompletionBar