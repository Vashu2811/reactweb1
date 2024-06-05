import React from "react";
import './Lastpage.css';
import Uplast from "./Uplast";

export default function Lastpage(){
    return(
        <div className="Lastpage">
                {/* <marquee behavior="" direction="">
                    <div className="element">
                        <div className="updown">
                            <div className="upside">
                            
                                <Uplast />
                            </div>

                        </div>
                    </div>
                </marquee> */}
                <marquee behavior="scroll"  scrollamount="20">
                <div className="updown">
                            <div className="upside">
                            
                                <Uplast />
                            </div>

                        </div>
                </marquee>
        </div>
    )
}