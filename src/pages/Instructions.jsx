import React from 'react';
import {Instruction, CameraSetup} from '../components/instructions';
import {Navbar} from '../components/common';
//Instructions screen for StageOne
const Instructions = () => {
    return (
        <div className="w-full  max-h-[100vh]">
            <Navbar />
            <div className="flex flex-row justify-center items-start ">
                <div className=" ">
                    <Instruction />
                </div>
                <div className="">
                    <CameraSetup />            
                </div>
            </div>
            {/* <div className='flex flex-row  justify-center items-center'>
                <div>
                    <h1>Instructions</h1>
                </div>
                <div>
                    <h1>Camera Setup</h1>
                </div>
            </div> */}
        </div>
    );
};

export default Instructions;
