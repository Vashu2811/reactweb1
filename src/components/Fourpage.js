import React from "react";
import './Fourpage.css';



export default function Fourpage(){
 return(
    // <div className="Fourpage">
    //     <div className="h1-tag-e"> 
    //         <h3>Exclusive Effect</h3>
    //     </div>
    //     <div className="fivevideo"> 
            
            
    //     </div>
    // </div>
    <div className="Fourpage">
        <h1 className="exclusive-effect">Exclusive Effect </h1>
        <div className="video-container">
            <video src="https://cdn.pixabay.com/video/2015/08/07/5-135665794_large.mp4" autoPlay loop muted></video>
            <video src="https://cdn.pixabay.com/video/2019/04/06/22619-328940133_tiny.mp4" autoPlay loop muted></video>
            <video src="https://cdn.pixabay.com/video/2016/09/13/5194-183786499_tiny.mp4" autoPlay loop muted></video>
            <video src="https://cdn.pixabay.com/video/2020/10/05/51592-465226688_tiny.mp4" autoPlay loop muted></video>
            <video src="https://cdn.pixabay.com/video/2024/02/04/199294-909903183_tiny.mp4" autoPlay loop muted></video>
        </div>
  </div>
 )
}