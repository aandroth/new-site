import React from "react";
import "./HireMe.css";
import { useState, useEffect } from "react";

let socket = null;
let connData = {};
let Uname = "Some_Rando";

function HireMeMain() {
    const [blurbs, setBlurbs] = useState([]);
    const [loginActive, setLoginActive] = useState(true);

    useEffect(() => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            console.log('Cleaning up socket...');
            CloseConnection();
        }
    }, []); // Empty array ensures this only runs on mount/unmount

    async function CreateWebSocket() {

        if ('WebSocket' in window) {
            console.log("WebSocket is supported by your browser!");
        }
        else {
            console.error("WebSocket is not supported by your browser.");
        }
        //var endpoint = "wss://9b5o54fsmi.execute-api.us-west-2.amazonaws.com/dev";
        var endpoint = "wss://u88pgzj3th.execute-api.us-west-2.amazonaws.com/dev/";
        Uname = document.getElementById("Uname").value;
        try {
            var apiurl = `${endpoint}?user_name=${Uname}`;
            console.log("API URL:", apiurl);
            socket = new WebSocket(apiurl);
        } catch (error) {
            console.error("Error constructing API URL:", error);
            return;
        }


        try {
            socket.addEventListener('open', function (event) {
                console.log("WebSocket connection opened:", event);
            });
            // Handle connection closure
            socket.addEventListener('close', () => {
                console.log('Server connection closed');
            });
        } catch (error) {
            console.error("WebSocket error:", error);
        }

        // Listen for messages from the server
        socket.addEventListener('message', (event) => {
            console.log('Message from server event: ' + event.data);
            try {
                const parsedData = JSON.parse(event.data);
                if (parsedData.msgType === "dataRequest") {
                    if (parsedData.connectionId && parsedData.callbackUrl) {
                        connData = {
                            "connectionId": parsedData.connectionId,
                            "callbackUrl": parsedData.callbackUrl
                        };
                        console.log("Received connection data:", connData);
                    }
                    console.log("Received message with undefined msgType:", parsedData.message);
                }
                else if (parsedData.msgType === "backlog") {
                    setBlurbs(parsedData.message.split('|'));
                }
                else if (parsedData.msgType === "message") {
                    setBlurbs(prevBlurbs =>  [`${parsedData.message}`, ...prevBlurbs]);
                }
                else if (parsedData.msgType === "onConnection") {
                    setBlurbs(prevBlurbs =>  [`${parsedData.message} joined the chat!`, ...prevBlurbs]);
                    console.log(`Added message (${parsedData.message}) to blurbs(${blurbs.length})`);
                }
                else // if (parsedData.msgType === "undefined") {
                {
                    console.log("Received message with undefined msgType:", parsedData);
                }
            } catch (error) {
                console.error("Error parsing message data:", error);
            }
        });


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

        //if (socket.readyState === WebSocket.OPEN) {
        //    console.log("WebSocket is open and ready to communicate.");
        //    console.log("Sending connection message.");
        //    socket.send(JSON.stringify({
        //        "routeKey": "message",
        //        "action": "message",
        //        "msgType": "onConnection",
        //        "message": Uname,
        //        "sender_name": Uname,
        //        "msg": Uname
        //    }));
        //    console.log("sent connection message.");
        //    setLoginActive(false);
        //}

        if (socket.readyState === WebSocket.OPEN) {
            console.log("WebSocket is open and ready to communicate.");
            console.log("Sending connection message.");
            socket.send(JSON.stringify({
                "route": "message",
                "action": "message",
                "msgType": "on_connection",
                "message": Uname,
                "sender_name": Uname,
                "msg": Uname
            }));
            console.log("sent connection message.");
            setLoginActive(false);
        }
        else {
            console.log("Websocket connection did not open")
        }
    }


    async function SendMessage() {
        console.log("SendMessage button clicked");
        let msg = `${Uname}: ${document.getElementById("Umessage").value}`;
        console.log("Send:", JSON.stringify({
            "routeKey": "message",
            "action": "message",
            "msgType": "message",
            "msg": msg
        }));
        await socket.send(
            JSON.stringify({
                "routeKey": "message",
                "action": "message",
                "msgType": "message",
                "msg": msg
            })
        );
        document.getElementById("Umessage").value = "";
    }


    async function SendSpecialMessage() {
        console.log("SendSpecialMessage button clicked");
        let msg = `on_connect`;
        console.log("Send:", JSON.stringify({
            "route": "message",
            "action": "message",
            "msgType": "message",
            "msg": msg
        }));
        await socket.send(
            JSON.stringify({
                "route": "message",
                "action": "message",
                "msgType": "message",
                "msg": msg
            })
        );
        document.getElementById("Umessage").value = "";
    }

    async function CloseConnection() {
        console.log("CloseConnection button clicked");
        if(socket)
            socket.close();

        if (socket && socket.readyState === WebSocket.CLOSED)
            console.log("WebSocket connection closed successfully.");
        setLoginActive(true);
    }

    const MessageBlock = function (blurb_message, index) {
        return (
            <pre> <p key={index} style={{ color: "lightgreen" }}>{blurb_message}</p></pre>
        );
    }

    return (

        <div className="ColumnBlock" style={{ maxHeight: "100vh" }}>
            <div className="Fullstack_Col" style={{ height: "100vh", width: "100vw" }}>
                <div style={{ top: "0px", display: "flex", flexDirection: "column", spacing: "20", width: "20vw", alignContent: "flex-center" }}>
                    {loginActive && (
                        <>
                            <label style={{ color: "lightgreen", fontSize: "30px", width: "50vw" }}>User name:</label>
                            <input style={{ color: "lightgreen", backgroundColor: "black", border: "3px solid darkgray", fontSize: "40px", width: "50vw" }} type="text" id="Uname" name="Uname" placeholder="q" defaultValue="Some_Rando" />
                            <button type="button" style={{ color: "lightgreen", backgroundColor: "black", border: "2px solid darkgray" }} onClick={CreateWebSocket}>Connect to Socket</button>
                        </>
                    )}
                    {!loginActive && (
                        <>
                            <button type="button" style={{ color: "lightgreen", backgroundColor: "black", border: "2px solid darkgray" }} onClick={CloseConnection}>Disconnect</button>
                            <input style={{ color: "lightgreen", backgroundColor: "black", border: "3px solid darkgray", fontSize: "15px", width: "50vw", padding: "5px" }} type="text" id="Umessage" name="Umessage" />
                            <button type="button" style={{ color: "lightgreen", backgroundColor: "black", border: "2px solid darkgray" }} onClick={SendMessage}>Post</button>
                            <button type="button" style={{ color: "lightgreen", backgroundColor: "black", border: "2px solid darkgray" }} onClick={SendSpecialMessage}>SpecialPost</button>
                        </>
                    )}
                    <button type="button" style={{ color: "lightgreen", backgroundColor: "black", border: "2px solid darkgray" }} onClick={() => { setLoginActive(!loginActive) }}>Change Page</button>
                    <div className="Blurb" style={{ color: "lightgreen", backgroundColor: "black", marginTop: "100px", width: "90vw" }}>
                        <div id="socketOutput" className="FullStack_Info_Page" style={{ height: "60vh", width: "100vw", overflowY: "scroll" }}>
                        {blurbs.map((blurb, index) => (
                            MessageBlock(blurb, index)
                        ))}
                        </div >
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HireMeMain;