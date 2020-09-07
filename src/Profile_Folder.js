import React, { useState } from 'react';
import forwardArrow from './Images/Arrow_Forward.png'
import forwardArrowHighlight from './Images/Arrow_Forward_Highlight.png'
import backwardArrow from './Images/Arrow.png'
import backwardArrowHighlight from './Images/Arrow_Highlight.png'
import resume from './Resume.pdf'

let resumeBio = "I am a software developer located in Seattle, WA, and am looking to make my mark by creating software and tools that customers love using, and that my fellow engineers love working with. ";
const resumeSkills = {
};

function Open_Profile_Folder() {

    let pageText0_0 = <p>Aaron Andrews is a software developer, trained in programming and Computer Science at the University of Alaska Fairbanks. He holds a Bachelors of Computer Science, and has taken a number of extra-curricular classes ranging from networking to graphics to artificial intelligence. Aaron Andrews also has prior work experience in both IT, working as a student technician for the university's IT department, and in iOS development, creating and maintaining the app, Frontier Scientists Media. Both of these positions involved working with self-direction, and with coworkers. Mr. Andrews fully believes in the power of teamwork, and focuses on making sure that the team is working together fluidly, towards the completion of the project.</p>;
    let pageText0_1 = <p>After graduating, Mr. Andrews moved to Seattle, WA, to attend the Academy of Interactive Entertainment. This two-year program focusing on game development taught him the fundamentals of game programming and design. He has worked on multi-disciplinary teams, and completed a diverse array of projects, mostly using the Unity and Unreal game engines. He completed the program in 2018.</p>;
    let pageText0_2 = <p>Even after finishing his schooling, Mr. Andrews is an eternal student. Having learned full-stack development for websites, he has continued to push his knowledge, always learning something new and sharpening his skills.</p>;
    let pageText1 = "Mr. Andrews believes in and uses human-readable code. He makes sure that variable, function, and class names are all easily identifiable as to what they are and how they are used.";
    let pageText2 = "This programmer would be an excellent hire for entry to mid-level programming positions. He is currently available and skilled at creating user interfaces, graphics, and general software development in a wide variety of languages. Mr. Andrews is also very adaptable, and is willing to learn any new languages, skills, and tools that a project requires.";
    let pageHeader0 = "Programming Philosophy";
    let pageHeader1 = "Programmer for Hire";

    const [forwardArrowIsActive, setForwardArrowIsActive] = useState(true);
    const [forwardArrowHighlightIsActive, setForwardArrowHighlightIsActive] = useState(false);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="Open_Folder">
                <div className="Open_Folder_Paperstack">
                    <h1>
                        Education
                    </h1>
                    <h2>
                        University of Alaska Fairbanks
                    </h2>
                    <p className="Open_Folder_Paperstack_Text">
                        {pageText0_0}
                    </p>
                    <h2>
                        Academy of Interactive Entertainment
                    </h2>
                    <p className="Open_Folder_Paperstack_Text">
                        {pageText0_1}
                    </p>
                    <h2>
                        Beyond
                    </h2>
                    <p className="Open_Folder_Paperstack_Text">
                        {pageText0_2}
                    </p>
                </div>
                <div className="Open_Folder_Paperstack">
                    <h1>
                        {pageHeader0}
                    </h1>
                    <p>
                        {pageText1}
                    </p>
                    <h1>
                        {pageHeader1}
                    </h1>
                    <p>
                        {pageText2}
                    </p>
                </div>
            </div>
            {forwardArrowIsActive && !forwardArrowHighlightIsActive && (
                <img src={forwardArrow} style={{ width: "10%", height: "15%", position: "absolute", top: "2%", right: "2%" }} onMouseEnter={() => setForwardArrowHighlightIsActive(true)} />
            )}
            {forwardArrowIsActive && forwardArrowHighlightIsActive && (
                <img src={forwardArrowHighlight} style={{ width: "10%", height: "15%", position: "absolute", top: "2%", right: "2%" }} onMouseLeave={() => setForwardArrowHighlightIsActive(false)} />
            )}
        </div>
    );
}

function Resume_Page() {
       
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div style={{ width: "100%", height: "100%" }}>
                <embed src={resume} width="800px" height="2100px" style={{ paddingLeft: "20%" }} />
            </div>
        </div>
    );
}

function Profile_Folder() {

    const [isOpenFolder, setIsOpenFolder] = useState(true);
    const [forwardArrowIsActive, setForwardArrowIsActive] = useState(true);
    const [forwardArrowHighlightIsActive, setForwardArrowHighlightIsActive] = useState(false);
    const [backwardArrowIsActive, setBackwardArrowIsActive] = useState(false);
    const [backwardArrowHighlightIsActive, setBackwardArrowHighlightIsActive] = useState(false);

    const toResumePage = () => {
        setForwardArrowIsActive(false);
        setForwardArrowHighlightIsActive(false);
        setBackwardArrowIsActive(true);
        setIsOpenFolder(false);
    }
    const toFolderPage = () => {
        setForwardArrowIsActive(true);
        setBackwardArrowIsActive(false)
        setBackwardArrowHighlightIsActive(false);
        setIsOpenFolder(true);
    }

    return (
        <div>
            {isOpenFolder && (
                <Open_Profile_Folder />
            )}
            {forwardArrowIsActive && !forwardArrowHighlightIsActive && (
                <img src={forwardArrow} style={{ width: "10%", height: "15%", position: "absolute", top: "2%", right: "2%" }}
                    onMouseEnter={() => setForwardArrowHighlightIsActive(true)}
                />
            )}
            {forwardArrowIsActive && forwardArrowHighlightIsActive && (
                <img src={forwardArrowHighlight} style={{ width: "10%", height: "15%", position: "absolute", top: "2%", right: "2%" }}
                    onMouseLeave={() => setForwardArrowHighlightIsActive(false)}
                    onMouseUp={() => toResumePage()}
                />
            )}

            {!isOpenFolder && (
                <Resume_Page />
            )}
            {backwardArrowIsActive && !backwardArrowHighlightIsActive && (
                <img src={backwardArrow} style={{ width: "10%", height: "15%", position: "absolute", top: "2%", left: "2%" }}
                    onMouseEnter={() => setBackwardArrowHighlightIsActive(true)}
                />
            )}
            {backwardArrowIsActive && backwardArrowHighlightIsActive && (
                <img src={backwardArrowHighlight} style={{ width: "10%", height: "15%", position: "absolute", top: "2%", left: "2%" }}
                    onMouseLeave={() => setBackwardArrowHighlightIsActive(false)}
                    onMouseUp={() => toFolderPage()}
                />
            )}
            </div>
    );
}
export default Profile_Folder;