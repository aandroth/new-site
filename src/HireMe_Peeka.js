import React from "react";
import "./HireMe.css";

function Summary() {

    return (
        <div className="Unity_Col" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <div className="Info_NameCard" style={{ marginBottom: "2%" }}>
                <p style={{  position: "absolute", right: "100px", marginTop: "0px", marginBottom: "0px"}}>Peeka</p>
            </div>
            <div className="Info_Page_Blurb" style={{ left: "0px", marginTop: "0px", marginBottom: "0%"}}>
                <div className="Blurb" style={{ left: "2%", top:"2%", marginTop: "0px", marginBottom: "2%"}}>
                    <h1 className="BlurbTitle_3">
                        <strong>Unity Developer</strong><br />
                        <strong>Sep 2023 - Nov 2024</strong><br />
                        <strong>Sep 2020 - Dec 2022</strong><br />
                    </h1>
                    <p className="BlurbText_3">
                        My time with Peeka had varied duties covering Unity skills, coding features, and assisting with art assets.<br />
                        Unity skills covered a wide range of the engine's features.<br />
                        Programming to modify the underlying codebase for the VR experiences, and adding new features.<br />
                        I also have skills with 2D (Photoshop) and 3D (3Ds Max) art tools and was able to use these skills to help create or edit assets as well.<br />
                        Following is a list of the different books that I helped bring to market for Peeka:
                    </p>
                </div>
                <div className="Info_Page_Blurb" style={{  left: "0px", marginTop: "0px", marginBottom: "2%" }}>
                    <div className="Blurb" style={{  left: "2%", top: "2%", marginTop: "0px", marginBottom: "0px" }}>
                        <h1 className="BlurbTitle_3">
                            <strong>Barbie - You Can Be a Fashion Designer</strong><br />
                        </h1>
                        <p className="BlurbText_3">
                            A very exciting collaboration with Mattel to create a VR experience for the Barbie - You Can Be a Fashion Designer book.<br />
                            For this experience we introduced a number of small games that were all played using the focus reticule.
                        </p>
                    </div>
                </div>
                <div className="Info_Page_Blurb" style={{  left: "0px", marginTop: "0px", marginBottom: "2%" }}>
                    <div className="Blurb" style={{  left: "2%", top: "2%", marginTop: "0px", marginBottom: "0px" }}>
                        <h1 className="BlurbTitle_3">
                            <strong>Farful - Yukkity Uck</strong><br />
                        </h1>
                        <p className="BlurbText_3">
                            Focused on being able to move the player through the scenes in a way that felt good and didn't cause disorientation.<br />
                        </p>
                    </div>
                </div>
                <div className="Info_Page_Blurb" style={{  left: "0px", marginTop: "0px", marginBottom: "2%" }}>
                    <div className="Blurb" style={{  left: "2%", top: "2%", marginTop: "0px", marginBottom: "0px" }}>
                        <h1 className="BlurbTitle_3">
                            <strong>I'm Calm</strong><br />
                        </h1>
                        <p className="BlurbText_3">
                            Refactoring and improving edge case handling.<br />
                            Created new tools to help create new scenes quickly.
                        </p>
                    </div>
                </div>
                <div className="Info_Page_Blurb" style={{  left: "0px", marginTop: "0px", marginBottom: "2%" }}>
                    <div className="Blurb" style={{  left: "2%", top: "2%", marginTop: "0px", marginBottom: "0px" }}>
                        <h1 className="BlurbTitle_3">
                            <strong>Pearl</strong><br />
                        </h1>
                        <p className="BlurbText_3">
                            Really learned about text placement and pacing.<br />
                            As well as combining textures to save draw calls.
                        </p>
                    </div>
                </div>
                <div className="Info_Page_Blurb" style={{ left: "0px", marginTop: "0px", marginBottom: "2%" }}>

                    <div className="Blurb" style={{  left: "2%", top: "2%", marginTop: "0px", marginBottom: "0px" }}>
                        <h1 className="BlurbTitle_3">
                            <strong>Rockhound</strong><br />
                        </h1>
                        <p className="BlurbText_3">
                            Created general features, helped clean up legacy code, and implemented new features such as persistent values across multiple playthroughs.
                        </p>
                    </div>
                </div>
                <div className="Info_Page_Blurb" style={{  left: "0px", marginTop: "0px", marginBottom: "2%" }}>
                    <div className="Blurb" style={{  left: "2%", top: "2%", marginTop: "0px", marginBottom: "0px" }}>
                        <h1 className="BlurbTitle_3">
                            <strong>Farful - Grey Bubble Goo</strong><br />
                        </h1>
                        <p className="BlurbText_3">
                            My first real project with Peeka outside AIE. I was brought onto the team after the majority of the features were already created.<br />
                            This of course required me to work with legacy code, learn the roles of the other team members,
                            and be able to create features and scenes that aligned with the team's vision.
                        </p>
                    </div>
                </div>
                <div className="Info_Page_Blurb" style={{  left: "0px", marginTop: "0px", marginBottom: "2%" }}>
                    <div className="Blurb" style={{  left: "2%", top: "2%", marginTop: "0px", marginBottom: "0px" }}>
                        <h1 className="BlurbTitle_3">
                            <strong>Ninja!</strong><br />
                        </h1>
                        <p className="BlurbText_3">
                            My first project for Peeka, which was completed during my time at AIE.
                            This was also during the first year's final, so balancing my time was very important.<br />
                            My contribution to this was small, and was just some algorithms to have assets flip up like a pop-up book in a vaied way with a springy effect.
                        </p>
                    </div>
                </div>
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