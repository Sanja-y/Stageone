// import React from 'react';
// import {
//     RadarChart,
//     PolarGrid,
//     PolarAngleAxis,
//     Radar,
//     ResponsiveContainer,
//     PolarRadiusAxis,
//     Legend,
//     Tooltip,
// } from 'recharts';

// const data = [
//     {
//         subject: 'Teamwork',
//         A: 65,
//         B: 85,
//         fullMark: 150,
//     },
//     {
//         subject: 'Leadership',
//         A: 65,
//         B: 85,
//         fullMark: 150,
//     },
//     {
//         subject: 'Sociability',
//         A: 65,
//         B: 85,
//         fullMark: 150,
//     },
//     {
//         subject: 'Professionalism',
//         A: 65,
//         B: 85,
//         fullMark: 150,
//     },
//     {
//         subject: 'Communication',
//         A: 65,
//         B: 85,
//         fullMark: 150,
//     },
//     {
//         subject: 'Attitude',
//         A: 65,
//         B: 85,
//         fullMark: 150,
//     },
//     {
//         subject: 'Creativity',
//         A: 65,
//         B: 85,
//         fullMark: 150,
//     },
// ];

// const radarDataMax = 100; // The maximum value for your data

// const RadarChartComponent = () => {
//     return (
//         <div>
//             <div style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'bold', marginLeft: '20px', marginTop: '5px' }}>
//                 Softskills AI Score
//             </div>
//             <ResponsiveContainer width="90%" height={190}>
//                 <RadarChart cx="50%" cy="55%" outerRadius="80%" data={data}>
//                     <PolarGrid />
//                     <PolarAngleAxis dataKey="subject" orientation="outer" />
//                     <PolarRadiusAxis
//                         domain={[0, radarDataMax]}
//                         angle={65}
//                         tick={[20, 40, 60, 80, 100]}
//                         tickFormatter={(value) => value}
//                     />
//                     <Radar name="Scored" dataKey="A" stroke="#00C49F" fill="#00C49F" fillOpacity={0.6} />
//                     <Legend
//                         iconType="square"
//                         layout="vertical"
//                         verticalAlign="top"
//                         align="right"
//                         chartHeight={300}
//                     />
//                     <Tooltip />
//                 </RadarChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };

// export default RadarChartComponent;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
    ResponsiveContainer,
    PolarRadiusAxis,
    Legend,
    Tooltip,
} from 'recharts';



const RadarChartComponent = () => {

    const [values, setValues] = useState([]);
    const radarDataMax = 10;
    const [assessmentScore, setAssessmentScore] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master");

                // console.log("ResponseData====>", response.data[0].question_details);

                // Assuming your JSON data structure matches the subcategories and assessment scores
                const subcategoryScores = response.data[0].question_details.map(
                    (item) => ({
                        "subject": item.category_name,
                        "A": parseFloat(item.category_assessment_score)
                    })
                );
                // console.log("123===>", subcategoryScores);
                // Create an object with subcategory assessment scores

                setValues(subcategoryScores);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='Radar-chart bg-white h-[11rem] p-1 rounded-lg'>
            <div className="flex items-center ">
                <p className="flex-grow ml-4 text-stone-700 text-lg font-bold">Soft Skills AI Score</p>
                <div className="me-2 mt-2 w-5 h-2.5 bg-violet-100 rounded-sm border border-zinc-400"></div>
                <p className='mr-4 me-2 mt-2 text-sm'>Scored</p>
            </div>

            <div className="">
                <ResponsiveContainer width="100%" height={150}>
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={values}
                        style={{ fontSize: "16px", wordWrap: 'break-word', }}
                    >
                        <PolarGrid />
                        <PolarAngleAxis
                            dataKey="subject"
                            stroke="#B7B4B4"
                            orientation="outer"
                            tick={{
                                fill: "#595656",
                                fontSize: '16px'
                            }}
                            tickLine={false}


                        />
                        <PolarRadiusAxis
                            domain={[0, radarDataMax]}
                            angle={90}
                            ticks={[2, 4, 6, 8, 10]}
                            fill='rgba(104, 48, 209, 0.50)'
                            axisLine={false}
                            tickSize={5}
                            tick={{ fontSize: 8, fontWeight: 'bold', fill: '#707070' }}
                        />

                        <Radar
                            name="Scored"
                            dataKey="A"
                            stroke="rgba(104, 48, 209, 0.50)"
                            fill="rgba(227, 218, 250, 0.60)" />

                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default RadarChartComponent;
