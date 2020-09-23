import React from "react";
import "./HireMe.css";

function Summary() {

    return (
        <div className="Container3">
            <div className="Container2">
                <div className="Unity_Block">
                    <div className="Unity_Col">
                        <p className="Blurb" id="UnityBlurb">
                                1+ years of professional experience with the Unity Game Engine
                        </p>
                    </div>
                    <div className="Combo_Col">
                        <p id="BioBlurb" className="Blurb">
                            I am Aaron Andrews, an Alaskan-born software developer. Looking to make my mark by creating games, software, and tools that customers love using, and that my fellow engineers love working with. Forever a student, I am always looking for new things to learn.
                        </p>
                    </div>
                    <div className="Fullstack_Col">
                        <p id="FullstackBlurb" className="Blurb">
                                1 year of Full-stack Development creating microservices
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <div className="ExperienceBlock">

        </div>
    );
}


function HireMeMain() {

    return (
        <div>
            <Summary/>
        </div>
    );
}

export default HireMeMain;