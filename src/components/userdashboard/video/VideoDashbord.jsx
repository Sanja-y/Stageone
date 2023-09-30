import React from 'react';
import ReactPlayer from 'react-player';
import './VideoDashbord.css';

const VideoDashbord = () => {
    return (
        <div className="video-dashboard">
            <ReactPlayer
                className="react-player"
                url="https://s3stageone.s3.ap-southeast-2.amazonaws.com/uploads/818e58bf-66f6-4f85-91a2-63daae0c33ac_66a3fad1-c561-40fa-a4cd-15ef021d69b0.webm?AWSAccessKeyId=AKIATFSOOQWBQ7P6LVVB&Expires=1696045651&Signature=vtBiJ4odNz6kDRHN02aLhREZ%2Btw%3D"
                width="70rem"
                height="16.5rem"
                controls={true}
            />
        </div>
    );
};

export default VideoDashbord;


// import React from 'react';
// import ReactPlayer from 'react-player';


// const VideoDashboard = () => {
//     // Decoding the URL
//     const videoURL = decodeURIComponent(
//         "https://s3stageone.s3.ap-southeast-2.amazonaws.com/uploads/818e58bf-66f6-4f85-91a2-63daae0c33ac_7d3b0164-cc41-4ff0-ba84-d0319d45bfbf.webm"
//     );

//     return (
//         <div className="video-dashboard">
//             <ReactPlayer
//                 className="react-player"
//                 url={videoURL}
//                 width="70rem"
//                 height="16.5rem"
//                 controls={true}
//             />
//         </div>
//     );
// };

// export default VideoDashboard;
