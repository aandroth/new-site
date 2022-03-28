import React from "react";
import "./HireMe.css";
import resume from './Resume.pdf'

function Summary() {

    return (
        <div className="Combo_Info_Page">
            <div className="Info_Page_Blurb">
                <embed src={resume} width="800vw" height="2100px" style={{ paddingLeft: "10vw" }} />
            </div>
            <div className="Info_NameCard">
                <p style={{ color: "deepskyblue" }}>Aaron Andrews Resume</p>
            </div>
        </div>
    );
}


function HireMeMain() {

    return (
        <div>
            <Summary />
        </div>
    );
}

export default HireMeMain;