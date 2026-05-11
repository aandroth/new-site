import React from "react";
import "./HireMe.css";

let socket;

async function CreateWebSocket() {
    var Uname = document.getElementById("Uname").value;
    var Uid = document.getElementById("Uid").value;
    let msgBack = "Output not set";
    var endpoint = "wss://ep22mmyxfb.execute-api.us-west-2.amazonaws.com/dev/";
    var apiurl = `${endpoint}?user_name=${Uname}&user_id=${Uid}`;
    console.log("API URL:", apiurl);

    if ("Websocket" in window) {
        console.log("WebSocket is supported by your browser!");
    }
    else {
        console.error("WebSocket is not supported by your browser.");
    }

    socket = await new WebSocket(apiurl);

    let timeOut = 50000; // 5 seconds
    while (socket.readyState === WebSocket.CONNECTING) {
        timeOut -= 1000;
        console.log("Waiting for WebSocket connection to open...");
        if (timeOut <= 0) {
            console.error("WebSocket connection timed out");
            return;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log("Wait for WebSocket connection is over.");

    try {
        socket.addEventListener('open', function (event) {
            console.log("WebSocket connection opened:", event);
        });

        // Listen for messages from the server
        socket.addEventListener('message', (event) => {
            console.log('Message from server:', event.data);
            msgBack = event.data;
            document.getElementById("socketOutput").innerText = msgBack;
        });

        // Handle connection closure
        socket.addEventListener('close', () => {
            console.log('Server connection closed');
        });
    } catch (error) {
        console.error("WebSocket error:", error);
    }

    if (socket.readyState === WebSocket.OPEN) {
        console.log("WebSocket is open and ready to communicate.");
        console.log("Sending connetion message.");
        socket.send(JSON.stringify({ "routeKey": "message", "action": "message", "sender_id": Uid, "sender_name": Uname, "msg": "connected" }));
        console.log("sent connetion message.");
    }

}

async function OnTest() {
    console.log("Test button clicked");
    let msg = `{ "routeKey": "message", "message": "Hello, WebSocket!"}`;
    var Uname = document.getElementById("Uname").value;
    var Uid = document.getElementById("Uid").value;
    await socket.send(
        JSON.stringify({ "routeKey": "message", "action": "message", "sender_id": Uid, "sender_name": Uname, "msg": msg })
    );

}


function HireMeMain() {

    return (
        <div className="ColumnBlock">
            <div className="Fullstack_Col" style={{ height: "100vh", width: "100vw" }}>
                <div style={{ position: "fixed", top: "0px", display: "flex", flexDirection: "column", width: "20vw" }}>
                    <label style={{ color: "lightgreen" }}>User name:</label>
                    <input type="text" id="Uname" name="Uname"></input>
                    <label style={{ color: "lightgreen" }}>User id:</label>
                    <input type="text" id="Uid" name="Uid"></input>
                    <label style={{ color: "lightgreen" }}>Id:</label>
                    <input type="text" id="Uname" name="Uname"></input>
                    <button type="button" style={{border:"2px solid white"}} onClick={CreateWebSocket}>Connect to Socket</button>
                    <button type="button" style={{ border: "2px solid white" }} onClick={OnTest}>Test</button>
                    <div className="Blurb" style={{ marginTop: "100px", width: "30vw" }}>
                        <div className="FullStack_Info_Page">
                            <p id="socketOutput" style={{ color: "lightgreen" }}>Output goes here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HireMeMain;