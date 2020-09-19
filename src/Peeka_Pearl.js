import React, { useState } from 'react';
import './App.css';

import PearlBook0 from "./Images/Peeka/Pearl/PearlBook0.png";

function Pearl(props) {

    const [isShown, setIsShown] = useState(false);

    const pearlInfoText = "Pearl Fairweather, a pirate captain teaching about equality and inclusion on the high seas.";

    return (
        <div className="Pokemon_Info_Paperstack">
            <h1>
                Pearl Fairweather: Pirate Captain
            </h1>
            <p>
                {pearlInfoText}
            </p>
        </div>
    );
}

function Pearl_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <Pearl />
            )}
            <div className="PolaroidFrameOuter" id="PolaroidBook0">
                <div className="PolaroidFrameInner" id="Pearl_Book0">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr0">
                <div className="PolaroidFrameInner" id="Pearl_Vr0">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidBook1">
                <div className="PolaroidFrameInner" id="Pearl_Book1">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr1">
                <div className="PolaroidFrameInner" id="Pearl_Vr1">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidBook2">
                <div className="PolaroidFrameInner" id="Pearl_Book2">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr2">
                <div className="PolaroidFrameInner" id="Pearl_Vr2">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Pearl_Page;