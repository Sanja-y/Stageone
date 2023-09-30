import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const OverallScore = () => {
  const [percentage, setPercentage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://xtract.openturf.dev/stageone_backend/api/v1/interview_master");
        // console.log(response.data);
        const data = response.data;
        const overallScore = data[9].overall_score;
        setPercentage(overallScore);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // const percentage = 80;

  return (
    <div className="Progressive-chart bg-white h-[11rem] p-1 rounded-lg">
      <div className="flex items-center ">
        <p className="flex-grow ml-4 text-stone-700 text-lg font-bold">Overall AI Score</p>
        <div className="me-2 mt-2 w-5 h-2.5 bg-[#44CD2E] rounded-sm"></div>
        <p className=' mt-2 mr-2 me-3 text-sm'>Scored</p>
      </div>

      <div className="flex justify-center align-center mt-3">
        <div className="font-extrabold" style={{ width: 120, height: 120 }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={8}

            styles={buildStyles({
              textColor: "#595656",
              pathColor: "#44CD2E",
              trailColor: "#d6d6d6",
              // textSize: "20px", // Adjust the text size as needed
              strokeLinecap: "butt",
              // color: "#595656", fontSize: "32px"
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default OverallScore;

