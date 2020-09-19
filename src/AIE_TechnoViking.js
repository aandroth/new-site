import React, { useState } from 'react';


function TechnoVikingInfo(props) {

    const [isShown, setIsShown] = useState(false);

    const vikingInfoText = "Awakened by the obnoxious partying of his village, a lone viking must dodge, block, and jump his way through a fierce party on his quest to find a quiet place to sleep. Techno Viking is a rhythm game created as a final project for AIE.";
    const vikingRoleText = "My part for this project was graphical effects and general gameplay.";

    return (
        <div className="Pokemon_Info_Paperstack">
            <h1>
                Techno Viking
                </h1>
            <p>
                {vikingInfoText}
            </p>
            <h1>
                My Role
            </h1>
            <p>
                {vikingRoleText}
            </p>
        </div>
    );
}

function TechnoViking_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <TechnoVikingInfo />
            )}
        </div>
    );
}

export default TechnoViking_Page;