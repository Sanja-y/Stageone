import { MainScreen, CompletionBar, Timer, MainTimer, Button } from ".";
import { useState } from 'react';
import GoodDesign from "../assets/questions/design/good-design.png"
import BadDesign from "../assets/questions/design/bad-design.png"
import Code from "../assets/questions/code/code.png"
import axios from '../axios/axios';
import { endpoints } from '../axios/endpoints';
import { useQuery } from "@tanstack/react-query"
let answer1 = "Lorem ipsum"
let answer2 = "Lorem Ipsum"
let answer3 = "lorem ipsum"
let answer4 = "lorem Ipsum"

let questions = {
  question_1: { type: "video", content: "Tell me about yourself" },
  question_2: {
    type: "design", content: "Select the design which is more correct",
    designs: [GoodDesign, BadDesign]
  },
  question_3: {
    type: "mcq", content: "How would you optimize the performance of a slow-running application? Select the correct option from below list.",
    answers: [answer1, answer2, answer3, answer4]
  },
  question_4: { type: "paragraph", content: "Describe a situation when you had a lot on your to-do list but limited time. How will you manage? Answer in 200 words only. " },
  question_5: { type: "programming", content: "Rewrite the code correctly", program: Code },
  question_6: { type: "debugging", prblm_stmt: Code }
}



function InterviewSection() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [start, setStart] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(0)

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
  document?.getElementById("submit")?.addEventListener("click", () => { stopTimer(); })
  let noOfQuestions;
  const fetchData = async () => {
    const response = await
      axios.get(endpoints.QUESTIONS)
    return response.data

  }

  const { data, isLoading, isError } = useQuery(["questions"], fetchData)
  function convertQuestionsToFormat(questions) {
    const result = {};
    if (questions?.length > 0) {
      questions.forEach((question, index) => {
        const questionKey = `question_${index + 1}`;
        const {
          type,
          question: questionText,
          category,
          stage,
          difficulty,
          options,
          problem_stmt,
        } = question;

        result[questionKey] = {
          type,
          question: questionText,
          category,
          stage,
          difficulty,
          problem_stmt,
        };

        if (options !== null && Array.isArray(options)) {
          result[questionKey].options = options;
        }
      });

    }
    return result;
  }




  const formattedQuestions = convertQuestionsToFormat(data);

  console.log(formattedQuestions);
  noOfQuestions = Object.keys(formattedQuestions).length;
  const total_time = noOfQuestions * 10;
  const [mainTimerMinutes, setMainTimerMinutes] = useState(total_time)
  const [mainTimerSeconds, setMainTimerSeconds] = useState(0)
  const [isMainTimerRunning, setIsMainTimerRunning] = useState(false)
  return (

    <div className="overflow-clip w-full bg-white relative">
      <div className='px-[30px] py-[3px] '>
        <div className='flex justify-end items-end'>
          <MainTimer isRunning={isMainTimerRunning}
            setIsRunning={setIsMainTimerRunning}
            minutes={mainTimerMinutes}
            setMinutes={setMainTimerMinutes}
            seconds={setMainTimerSeconds}
            setSeconds={setMainTimerSeconds} />
        </div>

        <CompletionBar questions={formattedQuestions}
          questionNumber={questionNumber} noOfQuestions={noOfQuestions}
          start={start} />

        <MainScreen questions={formattedQuestions}
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
          resetTimer={resetTimer} />

        {start === true ?
          (<div className='flex flex-row justify-end'>
            <Button setQuestionNumber={setQuestionNumber}
              resetTimer={resetTimer} questionNumber={questionNumber} noOfQuestions={noOfQuestions} />
          </div>) : <></>}
      </div>


    </div>
  );
}

export default InterviewSection;