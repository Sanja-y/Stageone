import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import introduction from "../assets/introduction-img.png";
import Terms from "./Terms";
import "./Introduction.css";

Modal.setAppElement("#root");

const Introduction = () => {
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex">
      <div className="w-1/2  ml-[130px]">
        <p className="flex flex-col text-[#595656] text-7xl font-extrabold mb-[40px] mt-[60px]">
          <span>Welcome to our</span>
          <span>Assessment.</span>
        </p>
        <p class="mb-[14px] text-3xl ">
          <span className="text-[#595656] font-normal">Hello </span>
          <span className="text-[#595656] font-extrabold">Kate Jons,</span>
        </p>
        <p class="mb-[14px]  text-[#707175] text-4xl font-extrabold  ">
          You have appled for:
        </p>

        <div className="div mt-[40px] text-3xl">
          <p>
            <span className="text-[#595656] font-normal">Job</span>
            <span className="ml-[150px] text-[#595656] font-extrabold">Software Engineering</span>
          </p>
          <p>
            <span className="text-[#595656] font-normal">Role</span>
            <span className="ml-[130px] text-[#595656] font-extrabold">Backend Developer</span>
          </p>
          <p>
            <span className="text-[#595656] font-normal">Experience</span>
            <span className="ml-[44px] text-[#595656] font-extrabold">0-1 Years</span>
          </p>
        </div>
      </div>

      <div class="w-1/2 flex flex-col mr-[130px] items-center mt-[40px]">
        <img src={introduction} className="w-[470px] h-[380px] mb-[95px] " />
        <label class="flex mb-[25px] ">
          <input
            type="checkbox"
            class="w-4 h-4 form-checkbox text-green-500 mt-2"
            checked={checkBoxChecked}
            onChange={() => setCheckBoxChecked(!checkBoxChecked)}
          />
          <span class="text-lg text-[#595656] font-light ml-2">
            I have read and agree to the{" "}
            <a href="#" className="text-blue-500" onClick={openModal}>
              Terms and Conditions
            </a>
          </span>
        </label>

        <button
          className="w-[470px] h-[50px] p-{23px}-{185px} bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            if (checkBoxChecked) {
              navigate("/camera-setup");
            } else {
              navigate("/");
            }
          }}
        >
          Get Started
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Terms and Conditions Modal"
        className="Terms-modal"
        overlayClassName="Terms-modal-overlay"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-center">Terms and Conditions</h2>
          <Terms />
          <button
            class="w-[100px] h-[30px] p-{23px}-{185px} mb-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Introduction;
