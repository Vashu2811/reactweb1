// Secondpage
import React from "react";
import Slideshow from './Slideshow';
import './Secondpage.css';
function Secondpage() {
    return (
        <div className="Secondpage">
            <div className="secondpage-start">
                <div className="mainpage-up">
                    <div classname="right-side">
                        <h2 className="hadding">
                            Made With Inshot
                        </h2>
                        <ul className="line-3">
                            <li className="threeline">Stay ahead of the latest trends, unlock your imagination</li>
                            <li className="threeline">Explore a variety of editing tips and ideas</li>
                            <li className="threeline">Ignite your creativity as you craft your video</li>
                        </ul>
                        <div classname="buttons">
                           <div className="btn-flex">
                           <div className="btn-1"> <button className="buttons-line-1">Replace Sky</button></div>
                            <div className="btn-1"><button className="buttons-line-2">Gaint Effect</button></div>
                            <div className="btn-1"><button className="buttons-line-3">Cutout Photo Collage</button></div>
                           </div>
                        </div>
                        <div classname="button-2">
                      <div className="btn-flex">     <div className="btn-2"> <button className="buttons-line-4">3D Editing trick</button></div>
                           <div className="btn-2"> <button className="buttons-line-5"> Outfit Transition</button></div></div>
                        </div>
                    </div>
                    <div className="lest-side">
                        <div className="gallary">
                            <Slideshow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondpage;
