import React from "react";
import "./HireMe.css";

function Summary() {

    return (
        <div className="Games_Info_Page">
            <div className="Info_Page_Blurb">
                <p style={{ color: "deepskyblue" }}>
                    <strong>Unity Developer</strong><br />
                    <strong>Sep 2020 - Present</strong><br />
                    <strong>Nov 2018 - July 2019</strong><br />
                    My time with Peeka had several and varied duties.<br />
                    One of my contributions was writing scripts in C#. These scripts covered a wide range of different needs,<br />
                    mostly consisting of general gameplay features.<br />
                    These features were like the underlying code behind how and when scenes changed, object animations activeated, and such.<br />
                    Beyond writing scripts, I helped by creating scenes and placing assets. I also have skills with Photoshop and 3Ds Max,
                    and was able to use these skills to help create or edit assets as well.<br />
                    Following is a list of the different books that I helped bring to market for Peeka:<br />
                    <br />
                    <strong>I'm Calm</strong><br />
                    Refactoring and improving edge case handling.
                    Created new tools to help create new scenes quickly.
                    <br />
                    <br />
                    <strong>Pearl</strong><br />
                    Really learned about text placement and pacing.
                    As well as combining textures to save draw calls.
                    <br />
                    <br />
                    <strong>Rockhound</strong><br />
                    Created general features, helped clean up legacy code, and implemented new features such as persistent values across multiple playthroughs.
                    <br />
                    <br />
                    <strong>Farful</strong><br />
                    My first real project with Peeka outside AIE. I was brought onto the team after the majority of the features were already created.<br />
                    This of course required me to work with legacy code, learn the roles of the other team members,
                    and be able to create features and scenes that aligned with the team's vision.
                    <br />
                    <br />
                    <strong>Ninja</strong><br />
                    My first project for Peeka, which was completed during my time at AIE.
                    This was also during the first year's final, so balancing my time was very important.<br />
                    My contribution to this was small, and was just some algorithms to have assets flip up like a pop-up book in a vaied way with a springy effect.<br /><br />
                    <strong>Rockhound</strong><br />
                    My first project from start to finish with Peeka. This really allowed me add features and learn good scene placement for a user in VR.<br />
                </p>
            </div>
            <div className="Info_NameCard">
                <p style={{ color: "deepskyblue" }}>Peeka</p>
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