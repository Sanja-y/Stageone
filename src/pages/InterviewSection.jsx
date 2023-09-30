import { MainScreen, CompletionBar, Timer, MainTimer, Button, InterviewDetails, VideoFeed } from "../components/interviewscreen";
import { useState, useCallback } from 'react';
import GoodDesign from "../assets/questions/design/good-design.png"
import BadDesign from "../assets/questions/design/bad-design.png"
import Code from "../assets/questions/code/code.png"
import axios from '../axios/axios';
import { endpoints } from '../axios/endpoints';
import { useQuery } from "@tanstack/react-query"
import { useMutation } from '@tanstack/react-query';
import React, { useRef } from "react";
import Webcam from "react-webcam";
//Mock object for testing
let answer1 = "Lorem ipsum"
let answer2 = "Lorem Ipsum"
let answer3 = "lorem ipsum"
let answer4 = "lorem Ipsum"

let questions = {
  question_1: { type: "video", question: "Tell me about yourself" },
  question_2: {
    type: "design", question: "Select the design which is more correct",
    designs: [GoodDesign, BadDesign]
  },
  question_3: {
    type: "mcq", question: "How would you optimize the performance of a slow-running application? Select the correct option from below list.",
    options: [answer1, answer2, answer3, answer4]
  },
  question_4: { type: "text", question: "Describe a situation when you had a lot on your to-do list but limited time. How will you manage? Answer in 200 words only. " },
  question_5: { type: "programming", question: "Write a program to find the third smallest element in an array." },
  question_6: { type: "debugging", question: "How to fix the code below", problem_stmt: "\n public class Function\n{\n   public static void main(String args[])\n   {\n      System.out.println(power(3,2));\n      System.out.println(power(3,2));\n      System.out.println(power(2));\n   }\n   public long power(int m)\n   {\n      return m*m;\n   }\n   public long power(int m,int n)\n   {\n      long product=1;\n      for(int i=1;i<=n;i++)\n      {\n          product=product*m;\n      }\n      return product;\n   }\n}", },
}



function InterviewSection() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [start, setStart] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(0)

  // const [capturing, setCapturing] = useState(false)
  const [recording, setRecording] = useState(null)

  //Timer Functions
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

  let noOfQuestions;
  const fetchData = async () => {
    const response = await
      axios.get(endpoints.QUESTIONS)
    return response.data

  }
  //Video Functions


  // const { data, isLoading, isError } = useQuery(["questions"], fetchData)
  // function convertQuestionsToFormat(questions) {
  //   const result = {};
  //   if (questions?.length > 0) {
  //     questions.forEach((question, index) => {
  //       const questionKey = `question_${index + 1}`;
  //       const {
  //         type,
  //         question: questionText,
  //         category,
  //         stage,
  //         difficulty,
  //         options,
  //         problem_stmt,
  //       } = question;

  //       result[questionKey] = {
  //         type,
  //         question: questionText,
  //         category,
  //         stage,
  //         difficulty,
  //         problem_stmt,
  //       };

  //       if (options !== null && Array.isArray(options)) {
  //         result[questionKey].options = options;
  //       }
  //     });

  //   }
  //   return result;
  // }




  // const formattedQuestions = convertQuestionsToFormat(data);

  // console.log(formattedQuestions);
  noOfQuestions = Object.keys(questions).length;
  const total_time = noOfQuestions * 10;
  const [mainTimerMinutes, setMainTimerMinutes] = useState(total_time)
  const [mainTimerSeconds, setMainTimerSeconds] = useState(0)
  const [isMainTimerRunning, setIsMainTimerRunning] = useState(false)
  const [mainTime, setMainTime] = useState(false)

  const selectedAnswers = {
    question1: {
      type: 'multipleChoice',
      answer: 'Option A',
    },
    question2: {
      type: 'trueFalse',
      answer: true,
    },
    // Add more questions and answers as needed
  };
  const submitAnswers = async (selectedAnswers) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Exam Answers Submission',
          body: JSON.stringify(selectedAnswers),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit answers');
      }

      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const { mutate, isLoading, isError, error, isSuccess, data } = useMutation(
    'submitAnswers',
    (selectedAnswers) => submitAnswers(selectedAnswers)
  );

  const handleSubmit = () => {
    console.log("-submit ")
    mutate(selectedAnswers);
  };
  //console.log("recording="+capturing)
  document?.getElementById("submit")?.addEventListener("click", () => {
    console.log("Before stopTimer");
    stopTimer();
    console.log("Before setStart");
    //setStart(false);
    console.log("Before handleSubmit");
    handleSubmit();
  });
  const [upload, setUpload] = useState(false)
  const webcamRef = useRef(null)
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [rawVideoData, setRawVideoData] = useState([]);
  const handleStartCaptureClick = () => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef?.current?.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
    mediaRecorderRef.current.start();
  };

  const handleDataAvailable = ({ data }) => {
    if (data.size > 0) {
      setRecordedChunks(prev => [...prev, data]);
      setRawVideoData(prev => [...prev, data]); // Store raw video data
    }
  };

  const handleStopCaptureClick = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      setCapturing(false);

      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"
        });
        const url = URL.createObjectURL(blob);

        // Create a temporary anchor element and trigger the click event
        const a = document.createElement("a");
        a.href = url;
        a.download = "captured-video.webm";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        console.log(rawVideoData)
        setRecordedChunks([]);
        setRawVideoData([]);
      }
    }
  };

  return (

    <div className="overflow-clip w-full bg-white relative">
      <div className=''>
        <div className='text-[26px] font-bold text-[#434343] mx-[8px] my-[16px]'>
          <h1>StageOne</h1>
        </div>
        <div className="flex">
          <div className={'flex flex-col w-[100%]'}>
            <div className="flex flex-row w-full mx-6">
              <div className="">
                <MainTimer isRunning={isMainTimerRunning}
                  setIsRunning={setIsMainTimerRunning}
                  minutes={mainTimerMinutes}
                  setMinutes={setMainTimerMinutes}
                  seconds={setMainTimerSeconds}
                  setSeconds={setMainTimerSeconds}
                  webcamRef={webcamRef}
                  mainTime={mainTime} />
              </div>
              <div className=" w-[90%]">
                <CompletionBar questions={questions}
                  questionNumber={questionNumber} noOfQuestions={noOfQuestions}
                  start={start} />
              </div>
            </div>

            <div className="flex">

              <div className={start === false ? "hidden" : "flex flex-col w-[15%]"}>
                <div className="">
                  <InterviewDetails />
                </div>

                <div className={start === false ? "relative" : questions[`question_${questionNumber}`]?.type?.toLowerCase() === "video" ? "absolute z-10 bottom-[10%] left-[40%] w-[30%]" : "relative"}>
                  <VideoFeed mirrored={true}
                    questions={questions}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    start={start} setStart={setStart}
                    noOfQuestions={noOfQuestions}
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    minutes={minutes}
                    seconds={seconds}
                    setMinutes={setMinutes}
                    setSeconds={setSeconds}
                    stopTimer={stopTimer}
                    startTimer={startTimer}
                    resetTimer={resetTimer}
                    recording={recording}
                    setRecording={setRecording}
                    upload={upload}
                    setUpload={setUpload}
                    handleStartCaptureClick={handleStartCaptureClick}
                    handleStopCaptureClick={handleStopCaptureClick} />
                </div>
              </div>
              <div className={start === false ? "flex flex-row justify-center w-[100%] bg-[#F5F5F5] px-[10px]" : "flex flex-col bg-[#F5F5F5] justify-center w-[85%] px-[10px]"}>
                {
                  start === false
                    ?
                    (<div className="w-[100%]">
                      <Webcam mirrored={true} />
                    </div>) :
                    (<></>)
                }
                <MainScreen questions={questions}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  start={start} setStart={setStart}
                  noOfQuestions={noOfQuestions}
                  isRunning={isRunning}
                  setIsRunning={setIsRunning}
                  minutes={minutes}
                  seconds={seconds}
                  setMinutes={setMinutes}
                  setSeconds={setSeconds}
                  stopTimer={stopTimer}
                  startTimer={startTimer}
                  resetTimer={resetTimer}
                  recording={recording}
                  setRecording={setRecording}
                  handleStartCaptureClick={handleStartCaptureClick}
                  handleStopCaptureClick={handleStopCaptureClick}
                  mainTime={mainTime}
                  setMainTime={setMainTime} />
              </div>
            </div>
          </div>



        </div>

        {start === true ?
          (<div className='flex flex-row justify-end'>
            <Button setQuestionNumber={setQuestionNumber}
              resetTimer={resetTimer} questionNumber={questionNumber}
              noOfQuestions={noOfQuestions}
              submitAnswers={submitAnswers} setCapturing={setCapturing}
              handleStartCaptureClick={handleStartCaptureClick}
              handleStopCaptureClick={handleStopCaptureClick}
              stopTimer={stopTimer}
              mainTime={mainTime}
              setMainTime={setMainTime}
              start={start} setStart={setStart}
              recording={recording}
              setRecording={setRecording} 
              upload={upload}
              setUpload={setUpload}/>

          </div>) : <></>}
      </div>


    </div>
  );
}

export default InterviewSection;