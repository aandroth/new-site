import React, { useState } from 'react';

function GrayBubbleGoo(props) {

    const [isShown, setIsShown] = useState(false);

    const grayBubbleInfoText = "A story revolving around the character of Farful Foolong, and how he helps his planet deal with a pesky goo.";

    return (
        <div className="Pokemon_Info_Paperstack">
            <h1>
                Farful Foolong and the Gray Bubble Goo
            </h1>
            <p>
                {grayBubbleInfoText}
            </p>
            <div className="PolaroidFrameOuter" id="PolaroidBook0">
                <div className="PolaroidFrameInner" id="GrayBubbleGoo_Book0">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr0">
                <div className="PolaroidFrameInner" id="GrayBubbleGoo_Vr0">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidBook1">
                <div className="PolaroidFrameInner" id="GrayBubbleGoo_Book1">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr1">
                <div className="PolaroidFrameInner" id="GrayBubbleGoo_Vr1">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidBook2">
                <div className="PolaroidFrameInner" id="GrayBubbleGoo_Book2">
                    <div className="PolaroidLabel" id="PolaroidLabel_Book">
                    </div>
                </div>
            </div>
            <div className="PolaroidFrameOuter" id="PolaroidVr2">
                <div className="PolaroidFrameInner" id="GrayBubbleGoo_Vr2">
                    <div className="PolaroidLabel" id="PolaroidLabel_Vr">
                    </div>
                </div>
            </div>
        </div>
    );
}

function GrayBubbleGoo_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <GrayBubbleGoo />
            )}
        </div>
    );
}

export default GrayBubbleGoo_Page;