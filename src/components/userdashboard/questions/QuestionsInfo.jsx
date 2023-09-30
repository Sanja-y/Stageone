// import React, { useEffect, useState } from 'react'
// import Questions from './collapse/Questions'
// import { Collapse } from 'antd';
// import { RightCircleTwoTone } from '@ant-design/icons';
// import axios from 'axios';



// const QuestionsInfo = () => {

//   const [data, setData] = useState(null);
//   const [categories, setCategories] = useState({
//     category: [], // Initialize as an empty array
//   });


//   useEffect(() => {
//     // Fetch the JSON data using Axios
//     axios.get("https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master")
//       .then((response) => {
//         // console.log(response.data[0].question_details);
//         // console.log("ALL DATA====>", response.data[0].question_details);
//         // setData(response.data); // Update the state with the fetched data

//         // const subCategoryNames = response.data[0].question_details.map(
//         //   (questionDetail) => questionDetail.questions.sub_category_name
//         // );
//         // console.log("category====>", subCategoryNames);

//         const questionDetails = response.data[0]?.question_details || [];
//         console.log(questionDetails);
//         const categoryNames = questionDetails.map(
//           (questionDetail) => questionDetail.category_name
//         );
//         // Update the categories state with the fetched category names
//         setCategories({ ...categories, category: ["All", ...categoryNames] });
//         // setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);





//   //   let categories = {
//   //     category: ["All", "MCQ", "Soft Skills", "Code", "Debbuging"],
//   //     All: ["How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?"],
//   //     MCQ: ["How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?"],
//   //     SoftSkills: ["How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?"],
//   //     Code: ["How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?"],
//   //     Debugging: ["How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?",
//   //       "How would you optimize the performance of a slow-running application. Can you explain in 300 words?"],
//   //   }
//   const text = `
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin mollis ligula et maximus.
//   Morbi eu mauris facilisis, viverra nibh sit amet, pretium nibh. Phasellus sodales varius malesuada. In varius elit sit amet mi fringilla, sed vulputate augue blandit. Aliquam eget posuere ligula. In facilisis neque eu risus scelerisque, vitae vehicula ex vestibulum. Suspendisse euismod ut urna id malesuada. Quisque at posuere turpis, ultrices lacinia velit. Aliquam molestie luctus ante, eu tempus mauris vestibulum at. Nunc ac dolor et sem rutrum convallis a non libero. Duis in interdum ex, quis laoreet sapien. Quisque eu volutpat nisi, rutrum pulvinar tortor. Ut id ullamcorper urna. Nam quis erat quis ligula sollicitudin gravida.
// Ut eget enim sed velit scelerisque pharetra. Donec tempus dui vitae tellus venenatis venenatis.
//  `;

//   const items = [
//     {
//       key: '1',
//       label: 'How would you optimize the performance of a slow-running application. Can you explain in 300 words?',
//       children: <p>{text}</p>,
//     },
//     {
//       key: '2',
//       label: 'How would you optimize the performance of a slow-running application. Can you explain in 300 words?',
//       children: <p>{text}</p>,
//     },
//     {
//       key: '3',
//       label: 'How would you optimize the performance of a slow-running application. Can you explain in 300 words?',
//       children: <p>{text}</p>,
//     },

//   ];
//   return (
//     <div className='flex flex-col relative rounded-md bg-white mt-1 mb-3'>
//       <div className='bg-[#263238] px-[16px] py-[12px] rounded-t-md md'>
//         <h1 className='text-[26px] font-bold text-white'>Questions and Answers</h1>
//       </div>
//       <div className='overflow-y-scroll h-[300px]'>
//         <div className='w-[100%] overflow-x-auto bg-white '>
//           <div className='my-[20px] flex flex-row justify-start bg-[#EEE9FC] py-[7px] text-secondary font-bold '>
//             {
//               categories?.category?.map((categoryName) => {
//                 return (
//                   <div className='px-[5px] mx-[6px] hover:bg-[#6830D1] hover:text-white transition-all duration-100'>
//                     <button name={categoryName} value={categoryName}>{categoryName}</button>
//                   </div>
//                 )
//               })
//             }

//           </div>
//           <div className='text-[14px] flex justify-end'>
//             <p><span className='font-bold'>3 Questions found</span> in this category </p>
//           </div>
//         </div>
//         <div className='mt-3 p-4 font-semibold'>
//           <Collapse items={items} expandIconPosition='right' />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default QuestionsInfo

// import React, { useEffect, useState } from 'react';
// import Questions from './collapse/Questions';
// import { Collapse } from 'antd';
// import { RightCircleTwoTone } from '@ant-design/icons';
// import axios from 'axios';

// const QuestionsInfo = () => {
//   const [data, setData] = useState(null);
//   const [categories, setCategories] = useState({
//     category: [], // Initialize as an empty array
//   });
//   const [selectedCategory, setSelectedCategory] = useState('All'); // Default category

//   useEffect(() => {
//     // Fetch the JSON data using Axios
//     axios
//       .get('https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master')
//       .then((response) => {
//         const questionDetails = response.data[0]?.question_details || [];
//         console.log(questionDetails);
//         const categoryNames = questionDetails.map(
//           (questionDetail) => questionDetail.category_name
//         );
//         // Update the categories state with the fetched category names
//         setCategories({ ...categories, category: ['All', ...categoryNames] });
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // Define your questions and answers data here
//   const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...`;
//   const items = [
//     {
//       key: '1',
//       label: 'How would you optimize the performance of a slow-running application. Can you explain in 300 words?',
//       children: <p>{text}</p>,
//     },
//     {
//       key: '2',
//       label: 'How would you optimize the performance of a slow-running application. Can you explain in 300 words?',
//       children: <p>{text}</p>,
//     },
//     {
//       key: '3',
//       label: 'How would you optimize the performance of a slow-running application. Can you explain in 300 words?',
//       children: <p>{text}</p>,
//     },
//   ];

//   // Filter questions based on the selected category
//   ///Extract questions from the fetched data
//   const questions = data?.[0]?.question_details || [];

//   // Filter questions based on the selected category
//   const filteredItems =
//     selectedCategory === 'All'
//       ? questions.flatMap((category) => category.questions) // Show all questions for 'All' category
//       : questions
//         .find((category) => category.category_name === selectedCategory)
//         ?.questions || [];


//   return (
//     <div className='flex flex-col relative rounded-md bg-white mt-1 mb-3'>
//       <div className='bg-[#263238] px-[16px] py-[12px] rounded-t-md md'>
//         <h1 className='text-[26px] font-bold text-white'>Questions and Answers</h1>
//       </div>
//       <div className='overflow-y-scroll h-[300px]'>
//         <div className='w-[100%] overflow-x-auto bg-white '>
//           <div className='my-[20px] flex flex-row justify-start bg-[#EEE9FC] py-[7px] text-secondary font-bold '>
//             {categories?.category?.map((categoryName) => {
//               return (
//                 <div
//                   key={categoryName}
//                   className='px-[5px] mx-[6px] hover:bg-[#6830D1] hover:text-white transition-all duration-100'
//                 >
//                   <button
//                     name={categoryName}
//                     value={categoryName}
//                     onClick={() => setSelectedCategory(categoryName)} // Set the selected category on button click
//                   >
//                     {categoryName}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//           <div className='text-[14px] flex justify-end'>
//             <p>
//               <span className='font-bold'>3 Questions found</span> in this category{' '}
//             </p>
//           </div>
//         </div>
//         <div className='mt-3 p-4 font-semibold'>
//           <Collapse items={filteredItems} expandIconPosition='right' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionsInfo;

///////*****************Main***** */

// import React, { useEffect, useState } from 'react';
// import Questions from './collapse/Questions';
// import { Collapse } from 'antd';
// import { RightCircleTwoTone } from '@ant-design/icons';
// import axios from 'axios';

// const QuestionsInfo = () => {
//   const [data, setData] = useState(null);
//   const [categories, setCategories] = useState({
//     category: [], // Initialize as an empty array
//   });
//   const [selectedCategory, setSelectedCategory] = useState('All'); // Default category

//   useEffect(() => {
//     // Fetch the JSON data using Axios
//     axios
//       .get('https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master')
//       .then((response) => {
//         const questionDetails = response.data[0]?.question_details || [];
//         console.log(questionDetails);
//         const categoryNames = questionDetails.map(
//           (questionDetail) => questionDetail.category_name
//         );
//         // Update the categories state with the fetched category names
//         setCategories({ ...categories, category: ['All', ...categoryNames] });
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // Extract questions from the fetched data
//   const questions = data?.[0]?.question_details || [];

//   // Filter questions based on the selected category
//   const filteredItems =
//     selectedCategory === 'All'
//       ? questions.flatMap((category) => category.questions) // Show all questions for 'All' category
//       : questions
//         .find((category) => category.category_name === selectedCategory)
//         ?.questions || [];
//   console.log("filteredItems====>", filteredItems);
//   // console.log(filteredItems[0].sub_category_name);
//   return (
//     <div className='flex flex-col relative rounded-md bg-white mt-1 mb-3'>
//       <div className='bg-[#263238] px-[16px] py-[12px] rounded-t-md md'>
//         <h1 className='text-[26px] font-bold text-white'>Questions and Answers</h1>
//       </div>
//       <div className='overflow-y-scroll h-[300px]'>
//         <div className='w-[100%] overflow-x-auto bg-white '>
//           <div className='my-[20px] flex flex-row justify-start bg-[#EEE9FC] py-[7px] text-secondary font-bold '>
//             {categories?.category?.map((categoryName) => {
//               return (
//                 <div
//                   key={categoryName}
//                   className='px-[5px] mx-[6px] hover:bg-[#6830D1] hover:text-white transition-all duration-100'
//                 >
//                   <button
//                     name={categoryName}
//                     value={categoryName}
//                     onClick={() => setSelectedCategory(categoryName)} // Set the selected category on button click
//                   >
//                     {categoryName}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//           <div className='text-[14px] flex justify-end'>
//             <p>
//               <span className='font-bold'>{filteredItems.length} Questions found</span> in this category{' '}
//             </p>
//           </div>
//         </div>
//         <div className='mt-3 p-4 font-semibold'>
//           {filteredItems.map((item) => (
//             <div key={item.question_id}>
//               <h2>{item.question_text}</h2>
//               <p>{item.answer.answer_text}</p>
//               <p>Score:{item.answer.assessment.assessment_score}</p>
//               <Collapse items={item.question_text} expandIconPosition='right' />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionsInfo;


/////////////end//////////////////

// import React, { useEffect, useState } from 'react';
// import Questions from './collapse/Questions';
// import { Collapse } from 'antd';
// import axios from 'axios';

// const QuestionsInfo = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     // Fetch the JSON data using Axios
//     axios
//       .get('https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master')
//       .then((response) => {
//         const questionDetails = response.data[0]?.question_details || [];
//         const categoryNames = questionDetails.map(
//           (questionDetail) => questionDetail.category_name
//         );
//         console.log("CATEGORYNAMES====>", categoryNames);
//         console.log("questionDetails=====>", questionDetails);
//         // Update the categories state with the fetched category names
//         setCategories(['All', ...categoryNames]);
//         // Set the default selected category to 'All'
//         setSelectedCategory('All');
//         // Set all questions as the default questions
//         setQuestions(questionDetails.flatMap((detail) => detail.questions));
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // Handle category selection and filter questions accordingly
//   useEffect(() => {
//     if (selectedCategory === 'All') {
//       // If 'All' is selected, show all questions
//       setQuestions(categories.flatMap((category) => category.questions));
//       console.log("ALL====>", questions);
//     } else {
//       // Otherwise, filter questions based on the selected category
//       const selectedCategoryQuestions = categories.find(
//         (category) => category.category_name == selectedCategory
//       )?.questions || [];
//       setQuestions(selectedCategoryQuestions);
//       console.log("Filtered=====>", questions);
//     }
//   }, [selectedCategory, categories]);

//   return (
//     <div className='flex flex-col relative rounded-md bg-white mt-1 mb-3'>
//       {/* ... Your header and category buttons ... */}

//       {/* Display the questions */}
//       <div className='mt-3 p-4 font-semibold'>
//         <Collapse
//           items={questions.map((question) => ({
//             key: question.question_id,
//             label: question.question_text,
//             children: <p>{question.answer_text}</p>,
//           }))}
//           expandIconPosition='right'
//         />
//       </div>
//     </div>
//   );
// };

// export default QuestionsInfo;


//////********** */

import React, { useEffect, useState } from 'react';
import Questions from './collapse/Questions';
import { Collapse } from 'antd';
import { RightCircleTwoTone } from '@ant-design/icons';
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios';

const QuestionsInfo = () => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState({
    category: [], // Initialize as an empty array
  });
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0); // Default category index

  useEffect(() => {
    // Fetch the JSON data using Axios
    axios
      .get('https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master')
      .then((response) => {
        const questionDetails = response.data[0]?.question_details || [];
        console.log(questionDetails);
        const categoryNames = questionDetails.map(
          (questionDetail) => questionDetail.category_name
        );
        // Update the categories state with the fetched category names
        setCategories({ ...categories, category: ['All', ...categoryNames] });
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Extract questions from the fetched data
  const questions = data?.[0]?.question_details || [];

  // Filter questions based on the selected category
  const filteredItems =
    selectedCategoryIndex === 0
      ? questions.flatMap((category) => category.questions) // Show all questions for 'All' category
      : questions[selectedCategoryIndex - 1]?.questions || [];
  console.log("filteredItems====>", filteredItems);

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  const [isCollapsed, setIsCollapsed] = useState(
    filteredItems.map(() => true) // Initialize collapse state for each item
  );

  const toggleCollapse = (index) => {
    const newIsCollapsed = [...isCollapsed];
    newIsCollapsed[index] = !newIsCollapsed[index];
    setIsCollapsed(newIsCollapsed);
  };

  //old
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   // Simulate progress increase over time
  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress < 100) {
  //         return prevProgress + 10;
  //       } else {
  //         clearInterval(interval);
  //         return prevProgress;
  //       }
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);


  return (
    <div className='flex flex-col relative rounded-md bg-white mt-1 mb-3'>
      <div className='bg-[#263238] px-[16px] py-[12px] rounded-t-md md'>
        <h1 className='text-[26px] font-bold text-white'>Questions and Answers</h1>
      </div>
      <div className='overflow-y-scroll h-[300px]'>
        <div className='w-[100%] overflow-x-auto bg-white '>
          <div className='mt-4 flex flex-row justify-start bg-[#EEE9FC] py-[7px] text-secondary font-bold '>
            {categories?.category?.map((categoryName, index) => (
              <div
                key={categoryName}
                className={`px-[5px] mx-[6px] transition-all duration-100 ${selectedCategoryIndex === index ? 'bg-[#6830D1] text-white' : ''
                  }`}
              >
                <button
                  name={categoryName}
                  value={categoryName}
                  onClick={() => handleCategoryClick(index)} // Set the selected category on button click
                >
                  {categoryName}
                </button>
              </div>
            ))}
          </div>
          <div className='text-[14px] flex justify-end mt-3'>
            <p>
              <span className='font-bold'>{filteredItems.length} Questions found</span> in this category{' '}
            </p>
          </div>
        </div>
        <div className='mt-1'>
          {filteredItems.map((item, index) => (
            <div className="bg-white rounded-md p-4 ml-4 mr-4 mt-2 bg-opacity-10 rounded-lg shadow border border-violet-700 border-opacity-20" key={item.question_id}>
              {/* Collapsible Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
              // Pass the item index to toggleCollapse
              >
                <i className="fa-solid fa-circle-play me-2" style={{ color: '#6830D1' }} />
                <span className="ml-2 text-lg font-semibold">{item.question_text}</span>
                <button className="focus:outline-none" onClick={() => toggleCollapse(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform transition-transform duration-300 ${isCollapsed[index] ? '' : 'rotate-180'
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Collapsible Content */}
              <div className={`flex-col mt-2 ml-8 ${isCollapsed[index] ? 'hidden' : ''}`}>
                {/* Content goes here */}
                <p className='text-justify me-6'>{item.answer.answer_text}</p>

                <p className='flex justify-end mt-2 gap-2 me-6'>
                  <span>Score: {item.answer.assessment.assessment_score}/10</span>
                  <span className='mt-1'>
                    <ProgressBar
                      completed={item.answer.assessment.assessment_score * 10} // Use the assessment_score as progress
                      bgColor="#44CD2E"
                      baseBgColor="#f2f2f2"
                      width='150px'
                      height="15px"
                      isLabelVisible={false}
                      borderRadius={false}
                    />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsInfo;

