import React from "react";
import "./HireMe.css";

function TitleBlocks() {

    return (
        <div className="TitleBlock">
            <div id="Unity_Title_Block">
                <p>UNITY DEVELOPER</p>
            </div>
            <div>
                <p>FULL STACK DEVELOPER</p>
            </div>
        </div>
    );
}

function Summary() {

    return (
        <div>
            <div className="Fullstack_Block_3">
                <div className="Combo_Block_3">
                    <div className="Unity_Block_3">
                        <div className="Unity_Col">
                            <div className="Blurb">
                                <p id="UnityBlurb">
                                    1+ years of professional experience with the Unity Game Engine
                                </p>
                            </div>
                        </div>
                        <div className="Combo_Col">
                            <div className="Blurb">
                                <p id="BioBlurb">
                                    Alaskan-born software developer. Looking to make my mark by creating games, software, and tools that customers love using, and that my fellow engineers love working with. Forever a student, I am always looking for new things to learn.
                                </p>
                            </div>
                        </div>
                        <div className="Fullstack_Col">
                            <div className="Blurb">
                                <p id="FullstackBlurb">
                                    1 year of Full-stack Development creating microservices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NameCard" id="NameCard">
                    <p>AARON ANDREWS</p>
                </div>
            </div>
        </div>
    );
}

function Education() {
    return (
        <div>
            <div className="Fullstack_Block_2">
                <div className="Unity_Block_2">
                    <div className="Unity_Col">
                        <div className="">
                            <p id="AIE_Blurb">
                                <strong>Academy of Interactive Entertainment</strong>
                            </p>
                        </div>
                    </div>
                    <div className="Fullstack_Col">
                        <div className="Blurb">
                            <p id="HCL_Blurb">
                                <strong>HCL America</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="NameCard">
                    <p>Education</p>
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
            <TitleBlocks />
            <Summary />
            <Education />
        </div>
    );
}

export default HireMeMain;