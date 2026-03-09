import React from "react";
import "./HireMe.css";
import resume from './Resume.pdf'

function Resume() {

    return (
        <div className="Combo_Col" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <div className="Info_NameCard" style={{ top: "0px", position: "relative" }}>
                <p style={{ color: "deepskyblue", top: "0px", marginRight: "20px", marginTop: "0px" }}>Aaron Andrews Resume</p>
            </div>
            <div className="Info_Page_Blurb" style={{ width: "100vw" }}>
                <embed src={resume} style={{ paddingLeft: "23vw", width: "54vw", height: "250vh" }} />
            </div>
        </div>
    );
}


function HireMeMain() {

    return (
        <div>
            <Resume />
        </div>
    );
}

export default HireMeMain;