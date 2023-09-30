import React from 'react'
import { VideoFeed } from '..'

const InterviewDetails = () => {
    return (
        <div className='flex flex-col text-center'>
            <div className='bg-[#707070] font-bold py-[1rem] text-white'>
                <h3>Interview Details</h3>
            </div>
            <div className='bg-white my-[14px] text-[14px]'>
                <div className='my-[12px]'>
                    <p className='text-[#434343]'>Interview Date</p>
                    <h3 className='text-[#707070] text-[16px]  font-bold'>15-09-2023</h3>
                </div>

                <div className='my-[12px]'>
                    <p className='text-[#434343]'>Time Slot</p>
                    <h3 className='text-[#707070] text-[16px] font-bold'>10:00 AM</h3>
                </div>

                <div className='my-[12px]'>
                    <p className='text-[#434343]'>Interview ID</p>
                    <h3 className='text-[#707070] text-[16px] font-bold'>12345</h3>
                </div>

                <div className='my-[12px]'>
                    <p className='text-[#434343]'>Job Type</p>
                    <h3 className='text-[#707070] text-[16px] font-bold'>Software Engineering</h3>
                </div>

                <div className='my-[12px]'>
                    <p className='text-[#434343]'>Name</p>
                    <h3 className='text-[#707070] text-[16px] font-bold'>Shweta Tawari</h3>
                </div>

                <div className='my-[12px]'>
                    <p className='text-[#434343]'>Experience</p>
                    <h3 className='text-[#707070] text-[16px] font-bold'>3 Years</h3>
                </div>

            </div>
        </div>
    )
}

export default InterviewDetails