// Thirdepage
import React from "react";
// video slide shoe import  line -------------
import VideoSlide from "./Video";
import Text from "./Div";
import './Thirdepage.css';

export default function Thirdepage(){
    return(
        <div className="Thirdepage">
            <div classname="main-page-containt">
                <div className="containar">
                    <div className="leftside">
                        <div cladsName="gallary-video">
                            {/* video slide show component */}
                                <VideoSlide />
                         </div>
                    </div>
                    <div className="rightside">
                        {/*  text are component */}
                        <Text />
                    </div>
                </div>
                <div className="linksec">
                    <div className="navlinkbottam">
                        <ul className="sixlinks">
                            <li className="li-1">Slow-mo</li>
                            <li className="li-1">Cutout</li>
                            <li className="li-1"> Auto Caption</li>
                            <li className="li-1">HLS</li>
                            <li className="li-1">Speed Curve</li>
                            <li className="li-1"> Traking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
