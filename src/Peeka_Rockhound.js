import React, { useState } from 'react';


function Rockhound(props) {

    const [isShown, setIsShown] = useState(false);

    const rockhoundInfoText = "Rockhound is about a young girl who goes across the world, and beyond, to find minerals and stones.";

    return (
        <div className="Pokemon_Info_Paperstack">
            <h1>
                Rockhound
            </h1>
            <p>
                {rockhoundInfoText}
            </p>
        </div>
    );
}

function Rockhound_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <Rockhound />
            )}
            <div className="PolaroidFrameOuter" id="PolaroidBook0">
                <div className="PolaroidFrameInner" id="Rockhound_Book0">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr0">
                <div className="PolaroidFrameInner" id="Rockhound_Vr0">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidBook1">
                <div className="PolaroidFrameInner" id="Rockhound_Book1">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr1">
                <div className="PolaroidFrameInner" id="Rockhound_Vr1">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidBook2">
                <div className="PolaroidFrameInner" id="Rockhound_Book2">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr2">
                <div className="PolaroidFrameInner" id="Rockhound_Vr2">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rockhound_Page;