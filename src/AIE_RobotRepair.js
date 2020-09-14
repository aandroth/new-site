import React, { useState } from 'react';


function RobotRepairInfo(props) {

    const robotRepairInfoText = "Robot Repair was created for the Global Game Jam 2020, with the theme of repair. Playing as a lonely robot that needed to repair itself to regain its lost memories. This was accomplished by traversing a 2D world with a grappling hook.";
    const robotRepairRoleText = "I created the UI, showing  battery(health), and the different parts the player had collected.";

    return (
            <div className="Pokemon_Info_Paperstack">
                <h1>
                    Robot Repair
                </h1>
                <p>
                    {robotRepairInfoText}
                </p>
                <h1>
                    My Role
                </h1>
                <p>
                    {robotRepairRoleText}
                </p>
            </div>
    );
}

function RobotRepair_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <RobotRepairInfo />
            )}
        </div>
    );
}

export default RobotRepair_Page;