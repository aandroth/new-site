import React from "react";
import { Link } from "react-router-dom";
import "./HireMe.css";
import { useRef } from 'react';
import { useState, useEffect, useCallback } from "react";

var scrollAmount = 0;
var topHeightNamecard = 0;

const m_windowHeight = window.outerHeight;
var m_experienceHeight = (m_windowHeight);
var m_educationHeight = (m_windowHeight * 2) + 70;
var m_projectsHeight = (m_windowHeight * 3) + 120;
var m_contactsHeight = (m_windowHeight * 4) + 185;

var m_experienceMoving = false;
var m_educationMoving = false;
var m_projectsMoving = false;
var m_contactsMoving = false;


const setScrollAmount = (amount) => {
    //window.scrollBy(0, amount);
    window.scrollTo({ top: amount, left: 0, behavior: 'smooth' })
}

function Summary() {

    return (
        <div className="HireMeDiv">
            <div className="Info_NameCard" style={{ position: "fixed", top: "0px", width: "99vw", display: "flex", flexDirection: "row", justifyContent: "flex-start", minHeight: "175px", borderBottom: "1px solid white", zIndex: "100" }}>
                <div style={{ position: "absolute", display: "flex", flexDirection: "row", padding: "0px", paddingRight: "20px", width: "100%", overflow: "hidden", minHeight: "50%", maxHeight: "50%", left: "0px", zIndex: "101", cursor: "pointer" }} onClick={() => setScrollAmount(0)}>
                    <p style={{ left: "0px", marginRight: "20px", marginTop: "0px", marginBottom: "0px", paddingTop: "0px", paddingBottom: "0px", height: "50%", fontSize: "54px", color: "white" }}>AARON ANDREWS</p>
                    <p style={{ marginTop: "4px", fontSize: "50px", color: "aqua" }}>Unity Developer</p>
                </div>
                <div style={{ minWidth: "30%", zIndex: "100", cursor: "pointer" }} onClick={() => setScrollAmount(0)}>
                </div>
                <div className="TopBarNameBlock" style={{paddingRight: "2vw", width:"25vw"}}>
                    <div style={{ minHeight: "50%" }}></div>
                    <p style={{ border: m_experienceMoving ? "4px solid white" : "4px solid #222222ff" }} onClick={() => setScrollAmount(m_experienceHeight+10)}>
                        Experience
                    </p>
                </div>
                <div className="TopBarNameBlock" style={{ paddingRight: "2vw", width: "22vw" }}>
                    <div style={{ minHeight: "50%" }}></div>
                    <p style={{ border: m_educationMoving ? "4px solid white" : "4px solid #222222ff" }} onClick={() => setScrollAmount(m_educationHeight + 10)}>
                        Education
                    </p>
                </div>
                <div className="TopBarNameBlock" style={{ paddingRight: "1vw", width: "20vw" }}>
                    <div style={{ minHeight: "50%" }}></div>
                    <p style={{ border: m_projectsMoving ? "4px solid white" : "4px solid #222222ff" }} onClick={() => setScrollAmount(m_projectsHeight + 10)}>
                        Projects
                    </p>
                </div>
                <div className="TopBarNameBlock" style={{ paddingRight: "5vw", width: "20vw" }}>
                    <div style={{ minHeight: "50%" }}></div>
                    <p style={{ border: m_contactsMoving ? "4px solid white" : "4px solid #222222ff" }} onClick={() => setScrollAmount(m_contactsHeight + 10)}>
                        Contact
                    </p>
                </div>
            </div>
            <div className="ColumnBlock" style={{ top: "180px" }} >
                <div className="Unity_Col">
                    <div className="Blurb">
                        <h1 className="BlurbTitle_3">
                            <strong>Game Developer - Unity</strong>
                        </h1>
                        <p className="BlurbText_3">
                            <strong>4+ years of professional experience with the Unity Game Engine<br /><br /></strong>
                        </p>
                    </div>
                </div>
                <div className="Combo_Col">
                    <div className="Blurb">
                        <p className="BlurbText_3">
                            Alaskan-born software developer now living in the Greater Seattle Area. Looking to make my mark by creating games, software, and tools that customers love using, and that my fellow engineers love working with. Forever a student, I am always looking for new things to learn.<br /><br />
                        </p>
                    </div>
                    <div className="Blurb">
                        <h1 className="BlurbTitle_3">
                            <strong>Unity Prototyper</strong>
                        </h1>
                        <p className="BlurbText_3">
                            <b>1 year working as a Unity Developer prototyping frontend experiences, and connecting them to a backend.</b><br /><br />
                        </p>
                    </div>
                    <div className="Blurb" style={{ display: "grid", placeItems: "center"}}>
                        <p className="ComboBlurb_3">
                            <Link to={'/resume'} style={{ color: "aqua" }}>
                                <strong style={{fontSize: "3em"}}>Resume</strong>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="Fullstack_Col">
                    <div className="Blurb">
                        <h1 className="BlurbTitle_3">
                            <strong>Microservices</strong>
                        </h1>
                        <p className="BlurbText_3">
                            <strong>1 year of Full-stack Development creating microservices<br /><br /></strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <div className="HireMeDiv">
            <div className="Info_NameCard" style={{ top: "0px", minHeight: "120px", overflow: "hidden" }}>
                <div style={{ maxWidth: "500px" }}>
                    <p style={{ position: "absolute", top: "0px", left: "30vw", width: "17%", zIndex: "0", border: "4px solid white" }}>
                        Experience
                    </p>
                </div>
            </div>
            <div className="ColumnBlock" style={{ zIndex: "-10" }}>
                <div className="Unity_Col">
                    <div className="Blurb">
                        <h1 className="BlurbTitle_3">
                            <strong>Peeka,<br/>
                                Unity Developer<br />(Part-Time)<br />
                            Sep 2020 - Present<br /></strong>
                        </h1>
                        <p className="BlurbText_3">
                            At Peeka, I assisted in using the Unity game engine to fulfill the team's objective of bringing children's books to life with the power of virtual reality. My duties were creating the scenes the users would be in, programming interactions with the assets in those scenes, and general programming to make the books look and feel enjoyable.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
                <div className="Combo_Col">
                    <div className="Blurb">
                        <h1 className="BlurbTitle_3">
                            <strong>Meta,<br />
                                Unity Developer<br />
                                May 2022 - May 2023<br /></strong>
                        </h1>
                        <p className="BlurbText_3">
                            1 year working as a Unity Developer for Meta, creating frontend experiences in the Unity game engine, and connecting that to a Python backend.<br /><br />
                        </p>
                    </div>
                </div>
                <div className="Fullstack_Col">
                    <div className="Blurb">
                        <h1 className="BlurbTitle_3">
                            <strong>HCL America,<br />
                            Jr Full Stack Developer<br />
                            July 2019 - Jan 2020</strong>
                        </h1>
                        <p className="BlurbText_3">
                            At HCL America, I was brought on as a Jr Full Stack developer, quickly learning the technologies and practices of the field, and was even certified in Pivotal Cloud Foundary.
                            <br />
                            <br />
                            I greatly enjoyed this role, and the skills I gained here. Armed with this knowledge, I have begun working on presonal projects that incorporate full stack technologies, such as this website, and an online game library.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Education() {
    return (
        <div className="HireMeDiv">
            <div className="Info_NameCard" style={{ minHeight: "120px", overflow: "hidden" }}>
                <p style={{ position: "absolute", top: "0px", left: "47.3vw", width: "17%", border: "4px solid white" }}>Education</p>
            </div>
            <div className="ColumnBlock">
                <div className="Unity_Col" style={{ width: "50%" }}>
                    <div className="Blurb">
                        <h1 className="BlurbTitle_2">
                            <strong>Academy of Interactive Entertainment</strong>
                        </h1>
                        <p className="BlurbText_2">
                            At the Academy of Interactive Entertainment I learned programming focused on video game development. This included graphics, AI, game loops, and more. During this two year course I completed several projects, and got multi-disciplinary teamwork skills on end-of-year projects where programmers were paired with artists and vfx students to create games.
                            <br />
                            <br />
                            The main technologies in the course started with C++, creating basic game loops and graphics. We then began using the Unity game engine, writing our scripts in C#.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
                <div className="Fullstack_Col" style={{ width: "50%" }}>
                    <div className="Blurb">
                        <h1 className="BlurbTitle_2">
                            <strong>HCL America</strong>
                        </h1>
                        <p className="BlurbText_2">
                            At HCL America I was trained in Full Stack development, creating small websites and microservices. This training covered fundamentals of all aspects of full stack development, such as security, design, and data flow.
                            <br />
                            <br />
                            For this role I had to learn a comprehensive technology stack:<br/>
                            Frontend: ReactJs and Redux<br/>
                            Backend: Java and Springboot<br/>
                            Database: MySQL<br/>
                            Cloud: Pivotal Cloud Foundary as well as some AWS and Azure
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Projects() {

    return (
        <div className="HireMeDiv">
            <div className="Info_NameCard" style={{ top: "0px", minHeight: "120px", overflow: "hidden" }}>
                <p style={{ position: m_projectsMoving ? "fixed" : "absolute", top: m_projectsMoving ? "50px" : "0px", left: "65vw", width: "12%", border: "4px solid white" }}>Projects</p>
            </div>
            <div className="ColumnBlock">
                <div className="Unity_Col">
                    <div className="Blurb">
                        <h1 className="BlurbText_3">
                            <strong>AIE</strong>
                        </h1>
                        <p className="BlurbText_3">
                            <strong>Techno Viking</strong><br />
                            Unreal, Blueprints, Graphics<br />
                            Final project at AIE, I created the graphical effects.<br /><br />
                            <strong>Gleeth God</strong><br />
                            Unity, C#, AI<br />
                            Created enemies, programming the AIs and attacks.<br /><br />
                        </p>
                        <h1 className="BlurbText_3">
                            <strong>Game Jams</strong>
                        </h1>
                        <p className="BlurbText_3">
                            <strong>Generations - Global Game Jam 2023</strong><br />
                            Solo project where the player performs an action to learn a skill, dies, and then their next character has the skill, and can learn a new one.<br />
                            I created all of the art, programming, and design.<br /><br />
                            <strong>Repair Robot - Global Game Jam 2020</strong><br />
                            Created the UI.<br /><br />
                        </p>
                    </div>
                </div>
                <div className="Combo_Col">
                    <div className="Blurb">
                        <h1 className="BlurbTitle_3">
                            <strong>Unity Fullstack</strong>
                        </h1>
                        <p className="BlurbText_3">
                            <strong>Game Library Interface</strong><br />
                            Interactive game library created so that users could browse through VR games. The library was created in the Unity Game Engine, and has a desktop and online versions.<br /><br />
                        </p>
                    </div>
                </div>
                <div className="Fullstack_Col">
                    <div className="Blurb" style={{ marginTop: "20%", width: "90%" }}>
                        <h1 className="BlurbTitle_3">
                            <strong>Microservies</strong>
                        </h1>
                        <p className="BlurbText_3">
                            <strong>Personal Website</strong><br />
                            This website! Originally written in plain Js and Html, I've rewritten it in ReactJs.<br /><br />
                            <strong>Kanban Board</strong><br />
                            Final learning project at HCL America. Was a to-do list application written in ReactJs, with the backend written in Java, and saved into a MySQL database. At the time, I deployed on AWS.<br /><br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="HireMeDiv">
            <div className="Info_NameCard" style={{ top: "0px", maxWidth: "99vw", minHeight: "120px", borderBottom: "1px solid white", overflow: "hidden" }}>
                <p style={{ position:"absolute", top: "0px", left: "81.5vw", width: "16%", border: "4px solid white" }}>Contact</p>
            </div>
            <div className="ColumnBlock">
                <div className="Unity_Col" style={{ width: "50%" }}>
                    <div className="Blurb">
                        <p className="BlurbText_2" style={{ top: "100px", right: "250px", width: "90%" }}>
                            <strong>Location:</strong><br/>
                            <strong>Greater Seattle Area, WA</strong>
                        </p>
                        <p className="BlurbText_2" style={{ top: "100px", right: "250px", width: "90%" }}>
                            <strong>LinkedIn:</strong><br/>
                            <strong><a href="https://www.linkedin.com/in/aaron-lee-andrews/">linkedin.com/in/aaron-lee-andrews/</a></strong>
                        </p>
                    </div>
                </div>
                <div className="Fullstack_Col" style={{ width: "50%" }}>
                    <div className="Blurb">
                        <p className="BlurbText_2" style={{ top: "100px", right: "-150px", width: "90%"}}>
                            <strong>Email:</strong><br />
                            <strong>aaron.lee.andrews@gmail.com</strong>
                        </p>
                        <p className="BlurbText_2" style={{ top: "100px", right: "-150px", width: "90%"}}>
                            <strong>GitHub:</strong><br />
                            <strong><a href="https://github.com/AaronLeeAndrews/">github.com/AaronLeeAndrews/</a></strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HireMeMain() {

    const [cc, setCC] = useState('black');
    const [blockSize, setBlockSize] = useState(window.innerHeight);
    const [experienceY, setExperienceY] = useState(0);
    const [vertPosition, setVertPosition] = useState(0);
    const [greenMoving, setGreenMoving] = useState(false);

    const handleScroll = e => {
        // style={{ top: "-1000px" }}  
        const position = window.scrollY;
        setVertPosition(Math.max(window.scrollY, 0));

        setGreenMoving(window.scrollY >= m_windowHeight ? true : false);
        m_experienceMoving = window.scrollY >= m_experienceHeight ? true : false;
        m_educationMoving = window.scrollY >= m_educationHeight ? true : false;
        m_projectsMoving = window.scrollY >= m_projectsHeight ? true : false;
        m_contactsMoving = window.scrollY >= m_contactsHeight ? true : false;
    }



    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleWheel = e => {
        // style={{ top: "-1000px" }}  
        setExperienceY(Math.max(experienceY + e.deltaY, 0));
        setVertPosition(Math.max(window.scrollY, 0));
    }

    useEffect(() => {
        //console.log("xpY: " + experienceY);
    }, [experienceY]);


    return (
        <div style={{ display: "flex", flexDirection: "column" }} onWheel={(e) => handleWheel(e)} onScroll={(e) => handleScroll(e)}>
            <Summary/>
            <Experience />
            <Education />
            <Projects />
            <Contact />
            {/*<h1 style={{ color: "aqua", position: "fixed" }}>{experienceY}</h1>*/}
        </div>
    );
}

export default HireMeMain;