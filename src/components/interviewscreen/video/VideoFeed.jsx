import React, { useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import axios from "axios";
import { useState, useRef } from "react"
import SimplePeer from 'simple-peer';


const VideoFeed = (props) => {
  const { start, setStart, questions, upload, setUpload, questionNumber, recording, setRecording } = props
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [question_id, setQuestionId] = useState(1);
  const interview_id= "5497db5b-43c7-47c1-9edb-eef351827191";
  //testing metadata
  const metadata = {
    userId: 123,
    recordingTimestamp: new Date().toISOString(),
    additionalInfo: "Some custom metadata",
  };
  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = 
    () => {
    setCapturing(true);
    const audioConstraints = {
      audio: true,
    };
    console.log("recording start")
    navigator.mediaDevices
      .getUserMedia(audioConstraints)
      .then((audioStream) => {
        const combinedStream = new MediaStream();
        combinedStream.addTrack(webcamRef.current.stream.getVideoTracks()[0]);
        combinedStream.addTrack(audioStream.getAudioTracks()[0]);

        mediaRecorderRef.current = new MediaRecorder(combinedStream, {
          mimeType: "video/webm; codecs=vp9,opus", // Updated MIME type
        });
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        );
        mediaRecorderRef.current.start();
      })
      .catch((error) => {
        console.error("Error accessing audio:", error);
     
      });
  }
 

  const handleStopCaptureClick = 

    () => {
    console.log("first",recording)
    
    if (mediaRecorderRef.current) {
      console.log("recording stop")
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }
    setUpload(true)
  }


  const handleUpload = 
    () => {
    console.log("UPLOAD",recordedChunks)
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm; codecs=vp9,opus", // Updated MIME type
      });
      
      const formData = new FormData();

      formData.append("metadata", JSON.stringify(metadata));

      // Append the video blob
     // formData.append("filename",`webcam-recording-${question_id}.webm`)
      formData.append("video", blob, `${interview_id}-question${question_id}.webm`);
      
      console.log(`${interview_id}-question-${question_id}.webm`)
    //  formData.append("video", blob, "webcam-recording.webm");
      setQuestionId(prevCount => prevCount+1);
      axios
        .post("http://localhost:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Webcam recording upload response:", response.data);
        })
        .catch((error) => {
          console.error("Webcam recording upload error:", error);
        });
        if(questionNumber!==questions?.length)
        {
          setRecording(true)
          console.log("recording question",questionNumber)
        }
        else
        {
          setRecording(false)
          console.log("final recording question",questionNumber)
        }

      setRecordedChunks([]);
    }
  }

  useEffect(() => {
    console.log("first",recording)
    // Start capturing when some condition is met (e.g., a prop or state change)
    if (recording === true) {
      handleStartCaptureClick();
    }

    // Stop capturing when some other condition is met
    // return () => {
      if (recording === false) {
        handleStopCaptureClick();
      }

  }, [recording]);
  useEffect(() => {
    if (upload===true&&recordedChunks?.length) {
      handleUpload();
      setUpload(false)
    }
  }, [upload,question_id,recordedChunks]);


  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  return (
    <div>
      <Webcam
        height={300}
        width={400}
        muted={true}
        audio={true}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />
    </div>
  );
}

export default VideoFeed





// useEffect(() => {
//   // Start capturing when some condition is met (e.g., a prop or state change)
//   if (start===true) {
//     handleStartCaptureClick();
//   }

//   // Stop capturing when some other condition is met
//   return () => {
//     if (start === false) {
//       handleStopCaptureClick();
//     }
//   };
// }, [start]);
//Stop Recording


{/* {capturing ? <button className='bottom-0 absolute' onClick={handleStopCaptureClick}  disabled={!capturing}>Stop</button> :
          <button className='bottom-0 absolute' onClick={handleStartCaptureClick}  disabled={capturing}>Start</button>} */}
{/* {
          recordedChunks.length > 0 && (
            <button className='bottom-0 absolute' onClick={handleDownload}>Download</button>
          )
        } */}