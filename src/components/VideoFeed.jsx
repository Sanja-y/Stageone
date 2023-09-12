import React, { useCallback } from 'react'
import Webcam from 'react-webcam'
import { useState, useRef } from "react"
//import "./videoRecord"
import camera from  "../assets/video 1.svg"
const VideoFeed = (props) => {
const {start, setStart , questions,questionNumber} = props
const webCamRef = useRef(null)
const mediaRecorderRef = useRef(null)
const [capturing, setCapturing] = useState(false)
const [recordedChunks, setRecordedChunks] = useState([])


const handleStartCaptureClick = useCallback(() =>{
  setCapturing(true)
  mediaRecorderRef.current = new MediaRecorder(webCamRef.current.stream,
    {mimeType:"video/webm"})
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    )
    mediaRecorderRef.current.start()
},[webCamRef,setCapturing,mediaRecorderRef])

const handleDataAvailable = useCallback(
  ({data}) => {
    if(data.size > 0)
    {
      setRecordedChunks((prev) => prev.concat(data))
    }
  }, [setRecordedChunks]
)
//Stop Recording
const handleStopCaptureClick = useCallback(()=> {
  mediaRecorderRef.current.stop()
  setCapturing(false)
}, [mediaRecorderRef, webCamRef, setCapturing])
//Download
const handleDownload = useCallback(()=>{
  if(recordedChunks.length){
    const blob = new Blob(recordedChunks,{
      type:"video/webm"
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    document.body.appendChild(a)
    a.style = "display:none"
    a.href = url 
    a.download = "captured-video.webm"
    a.click()
    window.URL.revokeObjectURL(url)
    setRecordedChunks([])
  }
}, [recordedChunks])
let key = "question_"+questionNumber;
console.log(questions[key]?.type?.toLowerCase())
  return (
    <div className={start !== true ? 'videoFeedForVideo absolute ' : questions[key]?.type?.toLowerCase() ==="video" ? 'videoFeedForVideo absolute ':"videoFeed absolute"}>
        <Webcam audio={false} id="" ref={webCamRef} className={start !== true ? " w-[78%] absolute rounded-[0px]" : questions[`question_${questionNumber}`]?.type?.toLowerCase() !=="video" ? "w-[40%] absolute rounded-[0px]":" w-[73%] absolute rounded-[0px]"}/>
        {console.log(questions?.[`question_${questionNumber}`]?.type?.toLowerCase(), questions?.[`question_${questionNumber}`]?.question)}
         {/* {capturing ? <button className='bottom-0 absolute' onClick={handleStopCaptureClick}>Stop</button> :
          <button className='bottom-0 absolute' onClick={handleStartCaptureClick}>Start</button>} */}
        {
          recordedChunks.length > 0 && (
            <button className='bottom-0 absolute' onClick={handleDownload}>Download</button>
          )
        }
        <span className={start && questions?.[`question_${questionNumber}`]?.type?.toLowerCase() ==="video"  === true ?  'absolute z-10 mx-[4%] my-[4%] text-white font-bold px-[10px] py-[5px] rounded-[20px] flex flex-row bg-red-500': "hidden"}><img src={camera} width="20" height="20" className='mx-2'/>Recording</span>
    </div>
    
  )
}

export default VideoFeed