import React from "react";
import './Firstpage.css';




function Firstpage() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header">
            <div className="logo"><img src="https://inshot.com/img-webp/nav_icon_inshot.webp" className="App-logo" alt="logo" /></div>
            <div className="side-link">
              <a href="#" className="ytlink" alt="youtube link"><img className="ytlinkk" src="https://img.icons8.com/?size=48&id=19318&format=png" /></a>
              <a href="#" className="tictoclink" alt="tictok link"><img className="ytlinkk" src="https://img.icons8.com/?size=48&id=118640&format=png" /></a>
              <div className="get">
                 <button className="grad-button" type="button" >Get Inshot</button>
              </div>
            </div>
          </div>
        </header>
        <div className="banner">
          <h1 className="h1">Explore infinite creativity </h1>
          <h1  className="h1">with<a href="#" className="diff-text"> InShot&#174;</a></h1>
          <div className="buttons">
          <div className="b-1">
           <div className="b-11">
             <a href="#" className="app-store">Download on the<h1 className="h1latter">App Store</h1> </a>
             </div>
             </div>
          <div className="b-2"><div className="b-22"><a href="#" className="google-play">GET IT ON <h1 className="h1latter">Google Play</h1></a></div></div>
          <div className="b-3"><div className="b-33"><a href="#" className="app-gallery">EXPLORE IT ON HUAWEI<h1 className="h1latter"> AppGallery</h1></a></div></div>
       </div> 
          <div className="p-tag"><p>Powerful all-in-one Video Editor and Video Maker with professional features.</p></div>
      </div>
      </div>
    );
  }
  
  export default Firstpage;
  