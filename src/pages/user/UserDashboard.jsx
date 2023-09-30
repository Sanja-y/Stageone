import React from "react";
import OverallScore from "../../components/userdashboard/charts/OverallScore";
import BarChartComponent from "../../components/userdashboard/charts/BarChartComponent";
import VideoDashbord from "../../components/userdashboard/video/VideoDashbord";
import Sidebar from "../../components/userdashboard/sidebar/Sidebar";
import TopBar from "../../components/userdashboard/topbar/TopBar";
import CandidateData from "../../components/userdashboard/candidate/CandidateData";
import RadarChartComponent from "../../components/userdashboard/charts/RadarChartComponent";
import PostReview from "../../components/userdashboard/postreview/PostReview";
import QuestionsInfo from "../../components/userdashboard/questions/QuestionsInfo";

const UserDashboard = () => {
    return (
        <div className="main bg-[#F0F0F0] h-[738px] ">
            <div className="w-[full]">
                <TopBar />
            </div>
            <div className="w-full">
                <CandidateData />
            </div>
            <div className="flex gap-2">
                <div className="w-[5%]">
                    <Sidebar />
                </div>

                <div className="w-[55%]">

                    <div className=" p-1">
                        <VideoDashbord />
                    </div>
                    <div className="w-full  grid grid-cols-1 sm:grid-cols-5 p-1 gap-4">
                        <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 ">
                            {/* Content for the 2/5 width section */}
                            <OverallScore />
                        </div>
                        <div className="Radar-chart rounded-md col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 bg-white">
                            {/* Content for the 3/5 width section */}
                            <RadarChartComponent />
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 p-1 ">
                        <BarChartComponent />
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-[40%] h-[100%] me-2 ">
                    <div className="flex flex-col">
                        <div className="max-h-[60%]">
                            <QuestionsInfo />
                        </div>
                        <div className="max-h-[30%]">
                            <PostReview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;