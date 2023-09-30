import React, { useEffect, useState } from 'react';
import SimplePeer from 'simple-peer';

// Replace with your Flask server URL

function Camera() {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [localVideoRef, setLocalVideoRef] = useState(null);
  const [remoteVideoRef, setRemoteVideoRef] = useState(null);

  // useEffect(() => {
  //   // Get the user's webcam and microphone streams
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true, audio: false })
  //     .then((userStream) => {
  //       setLocalStream(userStream);

  //       // Display the local stream in the local video element
  //       if (localVideoRef) {
  //         localVideoRef.srcObject = userStream;
  //       }

  //       // Create a peer connection
  //       const peerConnection = new SimplePeer({ initiator: true, stream: userStream });

  //       // Set up event listeners
  //       peerConnection.on('stream', (stream) => {
  //         setRemoteStream(stream);

  //         // Display the remote stream in the remote video element
  //         if (remoteVideoRef) {
  //           remoteVideoRef.srcObject = stream;
  //         }

  //         // Send the video frames to the Flask server
  //         const mediaStream = new MediaStream(stream.getVideoTracks());
  //         const mediaRecorder = new MediaRecorder(mediaStream);

  //         mediaRecorder.ondataavailable = (event) => {
  //           if (event.data.size > 0) {
  //             socket.emit('stream-media', {
  //               type: 'video',
  //               frame: event.data,
  //             });

  //             // Log that a frame was sent to the backend
  //             console.log('Sent a video frame to the backend');
  //           }
  //         };

  //         mediaRecorder.start();
  //       });

  //       setPeer(peerConnection);
  //     })
  //     .catch((error) => {
  //       console.error('Error accessing user media:', error);
  //     });

  //   return () => {
  //     if (localStream) {
  //       localStream.getTracks().forEach((track) => track.stop());
  //     }
  //     if (remoteStream) {
  //       remoteStream.getTracks().forEach((track) => track.stop());
  //     }
  //     if (peer) {
  //       peer.destroy();
  //     }
  //   };
  // }, [localVideoRef, remoteVideoRef]);

  return (
    <div>
      <div>
        <h2>Your Webcam</h2>
        <video ref={(ref) => setLocalVideoRef(ref)} autoPlay playsInline></video>
      </div>
      <div>
        <h2>Remote Webcam</h2>
        <video ref={(ref) => setRemoteVideoRef(ref)} autoPlay playsInline></video>
      </div>
    </div>
  );
}

export default Camera;
