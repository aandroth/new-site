import React, { useState } from 'react';


function GleethGodInfo(props) {

    const [isShown, setIsShown] = useState(false);

    const gleethInfoText = "Gleeth God follows the journey of Gleeth, a once-powerful entity in the Chluthulu mythos. Stripped of his power by rival, Gurathnaka, he now quests to reclaim what he lost, and vengance.";
    const gleethRoleText = "Programmed the enemies, making a melee unit, ranged unit, and a boss. Programming these was a lot of fun.";

    return (
            <div className="Pokemon_Info_Paperstack">
                <h1>
                    Gleeth God
                </h1>
                <p>
                    {gleethInfoText}
                </p>
                <h1>
                    My Role
                </h1>
                <p>
                    {gleethRoleText}
                </p>
            </div>
    );
}

function GleethGod_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <GleethGodInfo />
            )}
        </div>
    );
}

export default GleethGod_Page;