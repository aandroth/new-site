import React from "react";
import "./HireMe.css";
import { useState, useEffect, useRef } from "react";

let socket = null;
let connData = {};

function HireMeMain() {


    return (
        <div className="ColumnBlock">
            <div className="Fullstack_Col" style={{ height: "100vh", width: "100vw" }}>
                <div style={{ position: "fixed", top: "0px", display: "flex", flexDirection: "column", width: "20vw" }}>
                    <label style={{ color: "lightgreen" }}>User name:</label>
                    <input type="text" id="Uname" name="Uname" placeholder="q" defaultValue="Some_Guy" />
                    <label style={{ color: "lightgreen" }}>User id:</label>
                    <input type="text" id="Uid" name="Uid" placeholder="1" defaultValue="7" />
                    <button type="button" style={{ border: "2px solid white" }} onClick={CreateWebSocket}>Connect to Socket</button>
                    <button type="button" style={{ border: "2px solid white" }} onClick={OnTest}>Test</button>
                    <button type="button" style={{ border: "2px solid white" }} onClick={OnVerify}>Verify</button>
                    <button type="button" style={{ border: "2px solid white" }} onClick={CloseConnection}>Disconnect</button>
                    <div className="Blurb" style={{ marginTop: "100px", width: "90vw" }}>
                        <div id="socketOutput" className="FullStack_Info_Page">
                        {blurbs.map((blurb, index) => (
                            MessageBlock(blurb, index)
                        ))}
                        </div >
                    </div>
                    <div>
                        <iframe
                            src="http://bubblegame-client.s3-website-us-west-2.amazonaws.com"
                            width="100%"
                            height="500px"
                            frameborder="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HireMeMain;