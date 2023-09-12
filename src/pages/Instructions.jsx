import React from 'react';
import Instruction from '../components/Instruction';
import CameraSetup from '../components/CameraSetup';
import Navbar from '../components/Navbar';

const Instructions = () => {
    return (
        <div className="container ">
            <Navbar />
            <div className="flex">
                <div className="w-1/2">
                    <Instruction />
                </div>
                <div className="w-1/2">
                    <CameraSetup />
                </div>
            </div>
        </div>
    );
};

export default Instructions;
