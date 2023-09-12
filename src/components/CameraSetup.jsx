import React, { useState } from 'react';
import Modal from 'react-modal';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './CameraSetup.css';
import { useNavigate } from 'react-router';
Modal.setAppElement('#root');

const CameraSetup = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const navigate = useNavigate();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        navigate("/interview-section")
        
    };

    return (
        <div className="mt-4 mr-[130px]">
            <div className="flex flex-col justify-center text-center ">
                <div className="flex flex-col text-center text-[#595656] ">
                    <h3 className='text-[36px] font-bold mb-[20px] '>Camera Setup</h3>
                    <p className="flex flex-col text-xl text-center ">
                        <span>
                            We use camera to ensure fairness to everyone. Make sure you’re in
                        </span>
                        <span>
                            front of the camera. Ensure your <b className='font-bold'>browser has access to camera and</b>
                        </span>
                        <span>
                            <b className='font-bold'>microphone.</b> Ensure you are using a <b className='font-bold'>supported browser.</b>
                        </span>
                    </p>
                </div>
                <div className="w-[630px] h-[300px] bg-black flex justify-center items-center mt-4 rounded ">
                    <i className="fa-solid fa-video text-white text-5xl"></i>
                </div>
            </div>
            <div className="div flex justify-end mt-[70px]">
                <button onClick={openModal} className="w-[440px] h-[50px] p-{23px}-{185px} bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Continue
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                // onRequestClose={closeModal}
                contentLabel="Camera Setup Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="timer-container flex flex-col items-center justify-center">
                    <h2 className='mb-20 text-2xl font-bold text-595656'>Test starts in 10 Sec</h2>
                    <CountdownCircleTimer

                        isPlaying
                        duration={10}
                        size={120}
                        strokeWidth={10}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[10, 6, 3, 0]}
                        onComplete={closeModal}
                    >
                        {({ remainingTime }) => (
                            <div className="timer">
                                <div className="text-xl">{remainingTime}</div>
                                <div className="text-sm">seconds</div>

                            </div>
                        )}
                    </CountdownCircleTimer>
                    {/* <button onClick={closeModal} className="mt-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-500 p-2">
                        Close Modal
                    </button> */}
                    <p className='mt-[20px] flex flex-col text-595656 text-xl font-light text-center'>
                        <span className=''>Make sure you <b>stay on the page.</b></span>
                        <span>The <b>timer</b> has started and cannot be paused.</span>
                    </p>
                </div>
            </Modal>
        </div>
    );
}

export default CameraSetup;
