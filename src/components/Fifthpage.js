import React from "react";
import './Fifthpage.css';
import Music from "./Music";
import Sidevideo from "./Sidevideo"


export default function Fifthpage(){
    return(
        <div className="Fifthpage">
            <div className="twopart">
                <div className="partone">
                    {/* music laibray */}
                    <Music />
                </div>
                <div className="parttwo">
                    {/* video */}
                    <Sidevideo />
                </div>
            </div>
        </div>
    )
}