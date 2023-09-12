import React from 'react'
import introduction from "../assets/introduction-img.png";
const Instruction = () => {
    return (
        <div>
            <h3 className="text-[36px] text-[#595656] font-bold mt-4 mb-[20px] text-center">
                Instructions
            </h3>
            <ul class="list-disc text-[#595656] ml-[150px] mb-[30px]">
                <li className="mb-3 text-xl">
                    <p className="flex flex-col">
                        <span className='font-normal'>When you're ready to answer the questions press <b className="font-extrabold">Start</b></span>
                        <span>
                            <b className="font-bold">
                                Recording Button
                            </b>
                        </span>
                    </p>
                </li>
                <li className="mb-3 text-xl">
                    <p className="flex flex-col">
                        <span >
                            There are <span className="font-bold">two countdown timer</span> one for the <span className="font-bold">whole</span>
                        </span>
                        <span><span className="font-bold">interview</span> and one for <span className="font-bold">each question</span></span>
                    </p>
                </li>

                <li className="mb-3 text-xl">
                    <p className="flex flex-col">
                        <span>
                            The{" "}
                            <span className="font-bold">
                                countdown timer
                            </span>{" "}
                            will let you know how much time
                        </span>{" "}
                        <span>you have left</span>
                    </p>
                </li>
                <li className=" text-xl">
                    <p className="flex">
                        <span>
                            Submit your response by clicking on{" "}
                            <span className="font-bold">
                                Submit
                            </span>{" "}
                            button
                        </span>{" "}
                    </p>
                </li>

            </ul>
            <div className="flex justify-center text-center">
                <img src={introduction} alt="" className='w-[300px] h-[250px] mb-[125px]' />
            </div>
        </div>
    )
}

export default Instruction
