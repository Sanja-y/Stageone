// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import './Chart.css'

// const RadarChart = () => {
//   const chartRef = useRef(null);
//   const chartInstanceRef = useRef(null); // To keep track of the chart instance

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     // Destroy the previous chart instance if it exists
//     if (chartInstanceRef.current) {
//       chartInstanceRef.current.destroy();
//     }

//     // Create a new Radar chart instance
//     chartInstanceRef.current = new Chart(ctx, {
//       type: 'radar',
//       data: {
//         labels: ['Teamwork', 'Leadership', 'Sociability', 'Professionalism', 'Communication', 'Attitude', 'Creativity'],
//         datasets: [
//           {
//             label: 'Scored',
//             data: [20, 40, 60, 80, 100, 45, 32],
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           legend: {
//             display: true,
//             position: 'top',
//             align: 'end',
//           },
//         },
//         scales: {
//           r: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });

//     // Clean up the chart instance when the component unmounts
//     return () => {
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div className="div bg-white p-2">
//         <p className='text-left ml-5'>Soft Skills AI Score</p>
//         <div className='w-full h-[190px] flex  justify-center items-center'>
//           <canvas ref={chartRef}></canvas>
//         </div>
//       </div>

//     </>
//   );
// };

// export default RadarChart;
