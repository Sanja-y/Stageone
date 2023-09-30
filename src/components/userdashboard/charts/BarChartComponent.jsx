// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// const data = {
//   labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20'],
//   datasets: [
//     {
//       label: 'Not good',
//       data: [1, 0, 0, 4, 0, 0, 7, 0, 0, 3, 0, 0, 3, 0, 0, 2, 0, 0, 3, 0],
//       backgroundColor: 'red',
//     },
//     {
//       label: 'Average',
//       data: [0, 12, 0, 0, 14, 0, 0, 13, 0, 0, 11, 0, 0, 10, 0, 0, 14, 0, 0, 13],
//       backgroundColor: 'yellow',
//     },
//     {
//       label: 'Very Good',
//       data: [0, 0, 15, 0, 0, 17, 0, 0, 19, 0, 0, 20, 0, 0, 18, 0, 0, 19, 0, 0],
//       backgroundColor: 'green',
//     },
//   ],
// };



// const BarChartComponent = () => {
//   return (
//     <div className="Bar-chart p-1 rounded-sm">
//       <p className="ml-8 mb-3 mt-2">AI Score per question</p>
//       <div className="chart">
//         <ResponsiveContainer width="100%" height={200}>
//           <BarChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="Not good" fill="red" />
//             <Bar dataKey="Average" fill="yellow" />
//             <Bar dataKey="Very Good" fill="green" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default BarChartComponent;

// ****Main****


import React, { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

import './Chart.css'
import axios from 'axios';

const BarChartComponent = () => {

    // const [values, setValues] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 'https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master'
    //             );
    //             console.log("Questions=====>", response.data[0].question_details);
    //             // Extract questions and assessment scores from the JSON data
    //             const questionData = response.data[0].question_details
    //             console.log("QuestionSection=====>", questionData);
    //             const BardData = questionData.questions.map((question, index) => {
    //                 const assessmentScore = parseFloat(question.answer.assessment.assessment_score);

    //                 let category = 'Not Good'; // Default category

    //                 if (assessmentScore === 10) {
    //                     category = 'Very Good';
    //                 } else if (assessmentScore === 9) {
    //                     category = 'Average';
    //                 }

    //                 return {
    //                     name: `Q${index + 1}`, // Serial number with Q prefix
    //                     [category]: assessmentScore, // Use the category as a dynamic property
    //                 };
    //             });

    //             console.log("Bar", BardData);
    //             setValues(BardData);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // const [values, setValues] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 'https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master'
    //             );
    //             console.log("Questions=====>", response.data[0].question_details);
    //             // Extract questions and assessment scores from the JSON data
    //             const questionData = response.data[0].question_details;
    //             console.log("QuestionSection=====>", questionData);

    //             const BardData = [];

    //             for (const questionSection of questionData) {
    //                 const sectionBardData = questionSection.questions.map((question, index) => {
    //                     const assessmentScore = parseFloat(question.answer.assessment.assessment_score);

    //                     let category = 'Not Good'; // Default category

    //                     if (assessmentScore === 10) {
    //                         category = 'Very Good';
    //                     } else if (assessmentScore === 9) {
    //                         category = 'Average';
    //                     }

    //                     return {
    //                         name: `Q${index + 1}`, // Serial number with Q prefix
    //                         [category]: assessmentScore, // Use the category as a dynamic property
    //                     };

    //                 });

    //                 BardData.push(...sectionBardData);
    //             }

    //             console.log("Bar", BardData);
    //             setValues(BardData);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const [values, setValues] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master'
                );
                // console.log("Questions=====>", response.data[0].question_details);
                // Extract questions and assessment scores from the JSON data
                const questionData = response.data[0].question_details;
                // console.log("QuestionSection=====>", questionData);

                const BardData = [];
                let questionNumber = 1; // Initialize question number

                for (const questionSection of questionData) {
                    const sectionBardData = questionSection.questions.map((question) => {
                        const assessmentScore = parseFloat(question.answer.assessment.assessment_score);

                        let category = 'Not Good'; // Default category

                        if (assessmentScore <= 10 && assessmentScore >= 8) {
                            category = 'Good';
                        } else if (assessmentScore < 8 && assessmentScore > 4) {
                            category = 'Average';
                        }

                        const name = `Q${questionNumber}`;
                        questionNumber++; // Increment the question number

                        return {
                            name,
                            [category]: assessmentScore,
                        };
                    });

                    // Concatenate the sectionBardData array to BardData
                    BardData.push(...sectionBardData);
                }

                // console.log("Bar", BardData);
                setValues(BardData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (

        <div className='Bar-chart h-[11rem] bg-white p-2  rounded-lg overflow-x-auto'>
            <div className="flex">
                <p className="flex-grow ml-4 text-stone-700 text-lg font-bold">AI Score per question</p>
                <div className="flex justify-end items-center text-center mt-1">
                    <div className="me-2  rounded-sm bg-[#f20b0b] w-5 h-2.5"></div>
                    <p className='me-10 text-sm'>Not Good</p>
                    <div className="me-2 rounded-sm bg-[#ecf00a] w-5 h-2.5"></div>
                    <p className='me-10 text-sm'>Average</p>
                    <div className="me-2 rounded-sm bg-[#44CD2E] w-5 h-2.5"></div>
                    <p className='mr-2 me-4 text-sm'>Good</p>
                </div>
            </div>


            <ResponsiveContainer width="100%" height={130}>
                <BarChart data={values}
                    margin={{ top: 20, right: 10, left: 10, bottom: 15 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="name"
                        label={{ value: 'Question', position: 'bottom', offset: 0, }}
                        // ticks={["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"]}
                        tick={{ fontSize: 12 }}
                        interval={0} />
                    <YAxis
                        label={{ value: 'Marks', angle: -90, position: 'left', offset: -20, dx: 4, dy: -16 }}
                        tick={{ fontSize: 12, className: 'bold-y-axis-tick', fontWeight: 'font-semibold' }}
                        interval={0}
                        ticks={[2, 4, 6, 8, 10]}
                        style={{ fontWeight: 'bold' }}
                        tickLine={false}
                    />
                    <Tooltip />
                    {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '30px' }} /> */}
                    <Bar dataKey="Not Good" fill="#f20b0b" barSize={15} radius={[3, 3, 0, 0]} />
                    <Bar dataKey="Average" fill="#ecf00a" barSize={15} radius={[3, 3, 0, 0]} />
                    <Bar dataKey="Good" fill="#44CD2E" barSize={15} radius={[3, 3, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default BarChartComponent;
