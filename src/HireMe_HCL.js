import React from "react";
import "./HireMe.css";

function Summary() {

    return (
        <div className="FullStack_Info_Page">
            <div className="Info_Page_Blurb">
                <p style={{ color: "lightgreen" }}>
                    <strong>Jr Full Stack Developer</strong><br />
                    <strong>July 2019 - Jan 2020</strong><br />
                    My time with HCL was just job training, learning full stack development.<br />
                    The hope was that I would be able to get onto a project with client, Boeing. Unforntunately, this was during a rather bad time for the company,<br />
                    and projects were actually being cut. While waiting, I spent my training time learning more about full stack development and working on projects.<br />
                    Because of the issues with Boeing, I was not able to get onto a project before my time with HCL had to come to an end.<br />
                    I was wished well and thanked by my managers, and decided take some time off to complete personal side projects.<br />
                    I created a library of small experiments, to learn full stack development, but I was given the task of creating an actual microservice.<br />
                    This microservice was a simple Kanban board:<br />
                    <br />
                    <strong>Kanban Board</strong><br />
                    This Kanban board utilized my knowledge of full stack and cloud deployment.<br />
                    On the frontend, there was user creation, login, and of course creating and editing tasks.<br />
                    On the backend, all of the actions taken by the frontend were translated into actions for a MySQL databse using Hibernate.<br />
                    Finally, I deployed the microservice onto AWS utilizing their elastic virtual computers to serve it.<br />
                </p>
            </div>
            <div className="Info_NameCard">
                <p style={{ color: "lightgreen" }}>HCL America</p>
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