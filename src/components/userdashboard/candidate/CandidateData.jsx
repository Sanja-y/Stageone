// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const CandidateData = () => {

//     const [candidateDetails, setCandidateDetails] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('src/data/score.json');
//                 const data = response.data;
//                 console.log(data, "candidate data");
//                 setCandidateDetails(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="w-full flex justify-between pt-1 py-1">
//             <div className="ml-20 flex gap-5">
//                 <div className="flex mr-10 ">
//                     <p className="mr-2 ml-1">Name</p>
//                     <p>|</p>
//                     <p className="ml-2 font-bold">{candidateDetails?.candidate_name}</p>
//                 </div>
//                 <div className="flex ml-10 mr-10">
//                     <p className="mr-2">Experience</p>
//                     <p>|</p>
//                     <p className="ml-2 font-bold">{candidateDetails?.experience}</p>
//                 </div>
//                 <div className="flex ml-10 mr-10">
//                     <p className="mr-2">Job Type</p>
//                     <p>|</p>
//                     <p className="ml-2 font-bold">{candidateDetails?.role_name}</p>
//                 </div>
//             </div>
//             <div className="flex">
//                 <div className="flex ">
//                     <p className="mr-2">Recorded Interview on</p>
//                     <p>|</p>
//                     <p className="ml-2 me-2 font-bold">{candidateDetails?.interview_date}</p>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default CandidateData

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidateData = () => {
    const [candidateDetails, setCandidateDetails] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://xtract.openturf.dev/stageone_backend/api/v1/assessment_master');
                const data = (response.data[0]);
                setCandidateDetails(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateTime) => {
        const date = new Date(dateTime)
        return date.toLocaleDateString();
    }


    return (
        <div className="w-full flex justify-between pt-1 py-1">
            {loading ? (
                <p className='ml-20'>Loading...</p>
            ) : error ? (
                <p className='ml-20'>Error fetching data: {error.message}</p>
            ) : (
                <>
                    <div className="ml-20 flex gap-5">
                        <div className="flex mr-10">
                            {candidateDetails?.candidate_name !== null && candidateDetails?.candidate_name !== undefined ? (
                                <CandidateDetail label="Name" value={candidateDetails.candidate_name} />
                            ) : <CandidateDetail label="Name" value="NULL" />}
                        </div>

                        <div className="flex ml-10 mr-10">
                            {candidateDetails?.experience !== null && candidateDetails?.experience !== undefined ? (
                                <CandidateDetail label="Experience" value={candidateDetails.experience} />
                            ) : <CandidateDetail label="Experience" value="NULL" />}
                        </div>
                        <div className="flex ml-10 mr-10">
                            {candidateDetails?.role_name !== null && candidateDetails?.role_name !== undefined ? (
                                <CandidateDetail label="Job Type" value={candidateDetails.role_name} />
                            ) : <CandidateDetail label="Job Type" value="NULL" />}
                        </div>
                    </div>
                    <div className="flex">
                        <p className="mr-2">Recorded Interview on</p>
                        <p>|</p>
                        {candidateDetails?.interview_date_time !== null && candidateDetails?.interview_date_time !== undefined ? (
                            <>
                                <p className="ml-2 me-2 font-bold">{formatDate(candidateDetails.interview_date_time)}</p>
                            </>
                        ) : <p className="ml-2 me-2 font-bold">NULL</p>}
                    </div>
                </>
            )}
        </div>
    );
};

const CandidateDetail = ({ label, value }) => (
    <>
        <p className="mr-2 ml-1">{label}</p>
        <p>|</p>
        <p className="ml-2 font-bold">{value}</p>
    </>

);

export default CandidateData;
