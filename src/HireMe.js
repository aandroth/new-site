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
                                    <strong>1+ years of professional experience with the Unity Game Engine</strong>
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
                                    <strong>1 year of Full-stack Development creating microservices</strong>
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

function Experience() {
    return (
        <div>
            <div className="Fullstack_Block_2">
                <div className="Unity_Block_2">
                    <div className="Unity_Col">
                        <div className="Blurb">
                            <h1 id="Peeka_Experience_BlurbTitle">
                                <strong>Peeka,<br/>
                                Unity Developer<br />
                                Nov 2018 - July 2019</strong>
                            </h1>
                            <p id="AIE_Blurb">
                                At Peeka, I assisted in using the Unity game engine to fulfill the team's objective of bringing children's books to life with the power of virtual reality. My duties were creating the scenes the users would be in, programming interactions with the assets in those scenes, and general programming to make the books look and feel enjoyable.
                                <br />
                                <br />

                            </p>
                        </div>
                    </div>
                    <div className="Fullstack_Col">
                        <div className="Blurb">
                            <h1 id="HCL_Experience_BlurbTitle">
                                <strong>HCL America,<br />
                                Jr Full Stack Developer<br />
                                July 2019 - Jan 2020</strong>
                            </h1>
                            <p id="HCL_Blurb">
                                At HCL America, I was brought on as a Jr Full Stack developer, quickly learning the technologies and practices of the field, and was even certified in Pivotal Cloud Foundary.
                                <br />
                                <br />
                                I greatly enjoyed this role, and the skills I gained here. Armed with this knowledge, I have begun working on presonal projects that incorporate full stack technologies, such as this website, and an online game library.
                                <br />
                                <br />
                                After this employment, I took some time off, and am now back in the job market looking for new opportunities and challenges.
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="NameCard">
                    <p>Experience</p>
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
                        <div className="Blurb">
                            <h1 id="AIE_Education_BlurbTitle">
                                <strong>Academy of Interactive Entertainment</strong>
                            </h1>
                            <p id="AIE_Blurb">
                                At the Academy of Interactive Entertainment I learned programming focused on video game development. This included graphics, AI, game loops, and more. During this two year course I completed several projects, and got multi-disciplinary teamwork skills on end-of-year projects where programmers were paired with artists and vfx students to create games.
                                <br />
                                <br />
                                The main technologies in the course started with C++, creating basic game loops and graphics. We then began using the Unity game engine, writing our scripts in C#.
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="Fullstack_Col">
                        <div className="Blurb">
                            <h1 id="HCL_Education_BlurbTitle">
                                <strong>HCL America</strong>
                            </h1>
                            <p id="HCL_Blurb">
                                At HCL America I was trained in Full Stack development, creating small websites and microservices. This training covered fundamentals of all aspects of full stack development, such as security, design, and data flow.
                                <br />
                                <br />
                                For this role I had to learn a comprehensive technology stack:<br/>
                                On the frontend we learned ReactJs and Redux<br/>
                                On the backend we learned Java and Springboot<br/>
                                On the database we learned MySQL<br/>
                                And on the cloud we learned Pivotal Cloud Foundary as well as some AWS and Azure
                                <br />
                                <br />
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

function Projects() {

    return (
        <div>
            <div className="Fullstack_Block_3">
                <div className="Combo_Block_3">
                    <div className="Unity_Block_3">
                        <div className="Unity_Col">
                            <div className="Blurb">
                                <p id="UnityBlurb">
                                    <strong>Class and Game Jam Projects:</strong><br />
                                    <strong>Gleeth God</strong><br />
                                    <strong>Repair Robot</strong><br />
                                    <strong>Techno Viking</strong><br />
                                    <strong>Dinaki Adventures</strong>
                                </p>
                            </div>
                        </div>
                        <div className="Combo_Col">
                            <div className="Blurb">
                                <p id="BioBlurb">
                                    <strong>Game Library Interface</strong>
                                </p>
                            </div>
                        </div>
                        <div className="Fullstack_Col">
                            <div className="Blurb">
                                <p id="FullstackBlurb">
                                    <strong>Personal Website</strong><br/>
                                    <strong>Kanban Board</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NameCard">
                    <p>Projects</p>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <div className="Fullstack_Block_2">
                <div className="Unity_Block_2">
                    <div className="Unity_Col">
                        <div className="Blurb">
                            <p id="AIE_Blurb">
                                <strong>Location:</strong><br/>
                                <strong>Seattle, WA</strong>
                            </p>
                            <p id="AIE_Blurb">
                                <strong>LinkedIn:</strong><br/>
                                <strong><a href="https://www.linkedin.com/in/aaron-lee-andrews/">aaron-lee-andrews</a></strong>
                            </p>
                        </div>
                    </div>
                    <div className="Fullstack_Col">
                        <div className="Blurb">
                            <p id="HCL_Blurb">
                                <strong>Phone:</strong><br />
                                <strong>(907)750-2617</strong>
                            </p>
                            <p id="HCL_Blurb">
                                <strong>Email:</strong><br />
                                <strong>aaron.lee.andrews@gmail.com</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="NameCard">
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
}

function HireMeMain() {

    return (
        <div>
            <TitleBlocks />
            <Summary />
            <Experience />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
}

export default HireMeMain;