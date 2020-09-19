import React, { useState } from 'react';

function YukkityUck(props) {

    const [isShown, setIsShown] = useState(false);

    const yukkityUckInfoText = "Farful Foolong returns, and helps his friend going through an illness.";

    return (
        <div className="Pokemon_Info_Paperstack">
            <h1>
                YukkityUck
            </h1>
            <p>
                {yukkityUckInfoText}
            </p>
            <div className="PolaroidFrameOuter" id="PolaroidBook0">
                <div className="PolaroidFrameInner" id="YukkityUck_Book0">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr0">
                <div className="PolaroidFrameInner" id="YukkityUck_Vr0">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidBook1">
                <div className="PolaroidFrameInner" id="YukkityUck_Book1">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr1">
                <div className="PolaroidFrameInner" id="YukkityUck_Vr1">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidBook2">
                <div className="PolaroidFrameInner" id="YukkityUck_Book2">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr2">
                <div className="PolaroidFrameInner" id="YukkityUck_Vr2">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
        </div>
    );
}

function YukkityUck_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <YukkityUck />
            )}
        </div>
    );
}

export default YukkityUck_Page;