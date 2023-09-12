import React from 'react'
const VideoQuestion = (props) => {
    const {questions, questionNumber, setQuestionNumber, noOfQuestions} = props
    let key = "question_"+questionNumber
    if(typeof questionNumber !== "undefined" && Object.entries(questions[key]).length>0)
    {
      return (
        <div>
            <p>This question must be answered in the form of video. Please face the camera and say the correct answer.</p>
        </div>
      )
    }
    else{
      return(
        <></>
      )
    }
  
}

export default VideoQuestion