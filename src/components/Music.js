import React from "react";
import './Music.css';

export default function Music() {
    return(
        <div className="Music">
            <div className="Library"><h1>Music Library</h1></div>
            <div className="RRowone">
                <div className="ROWone">
                    <div class="album-container">
                        <div class="album">
                            <img src="https://cdn.pixabay.com/photo/2017/01/11/18/09/boy-1972493_640.jpg" alt="Wander Album Cover" />
                            <div class="title">Wander</div>
                            <div class="artist">Ikson</div>
                        </div>
                        <div class="album">
                            <img src="https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_640.jpg" alt="Night Out Album Cover" />
                            <div class="title">Night out</div>
                            <div class="artist">LiQWYD</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="RRowtwo">
                <div className="ROWone">
                    <div class="album-container">
                        <div class="album">
                            <img src="https://cdn.pixabay.com/photo/2017/11/07/18/40/brushes-2927793_640.jpg" alt="Wander Album Cover" />
                            <div class="title">Street Food</div>
                            <div class="artist">FASSounds</div>
                        </div>
                        <div class="album">
                            <img src="https://cdn.pixabay.com/photo/2016/02/23/04/52/model-1216916_640.jpg" alt="Night Out Album Cover" />
                            <div class="title">Daze</div>
                            <div class="artist">KiaNia</div>
                        </div>
                    </div>
                </div>
            </div>
           <div className="RRowthree">
                <div className="ROWone">
                        <div class="album-container">
                            <div class="album">
                                <img src="https://cdn.pixabay.com/photo/2014/10/27/18/38/man-505353_640.jpg" alt="Wander Album Cover" />
                                <div class="title">Porcelain</div>
                                <div class="artist">Silicon Estate</div>
                            </div>
                            <div class="album">
                                <img src="https://cdn.pixabay.com/photo/2020/05/23/05/57/man-5208156_640.jpg" alt="Night Out Album Cover" />
                                <div class="title">Bossanova</div>
                                <div class="artist">Ilya Truhanov</div>
                            </div>
                        </div>
                    </div>
           </div>
        </div>
    )
}