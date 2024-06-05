import React, { useState, useEffect } from 'react';
import './Video.css';
const videos = [
  'https://library.animatron.io/templates/1f4f526458401753acceb2d5/instagram_story_hd720.mp4', 
  'https://library.animatron.io/templates/a33d4164c8b75c7549237978/instagram_story_hd720.mp4',
  'https://library.animatron.io/templates/ce3a4164af237e6d88055e6e/instagram_story_hd720.mp4',

  // Add more video URLs here
];

function VideoSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="VideoSlide">
      <iframe muted width={280} height={500} className="video-size"
        title={`Slide ${currentIndex}`}
        src={videos[currentIndex]}
        
      />
    </div>
  );
}

export default VideoSlide;

// import React from "react";
// import './Video.css';
// function Videoslide() {
  
//   return (
      
//  <div className="videocomponent">   
//     <div className="container-1">
//         <div id="carousel-1">
            
            
//             <video width="640" height="360" controls autoplay>
//              <source src="https://library.animatron.io/templates/55e10d63d9e310c8d54e48e0/youtube_horizontal_hd720.mp4" type="video/webm" />
//             </video>

              
//             <video width="640" height="360" controls autoplay>
//              <source src="https://library.animatron.io/templates/6f08e1622cc7b550a0e25c25/generic_horizontal_hd720.mp4" type="video/webm" />
//             </video>

              
//             <video width="640" height="360" controls autoplay>
//              <source src="https://library.animatron.io/templates/09dd745f5ab219a44736e7b6/youtube_horizontal_hd720.mp4" type="video/webm" />
//             </video>

//         </div>
//       </div>
// </div>
    
//   );
// }

// export default Videoslide;
