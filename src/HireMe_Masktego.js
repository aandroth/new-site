import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./HireMe.css";

function Masktego() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build_Masktego/Build_Web.loader.js",
        dataUrl: "Build_Masktego/Build_Web.data",
        frameworkUrl: "Build_Masktego/Build_Web.framework.js",
        codeUrl: "Build_Masktego/Build_Web.wasm",
    });

    return <Unity unityProvider={unityProvider} style={{ width: "100vw", height: "101vh" }} />;
}


function MasktegoMain() {

    const { unityProvider } = useUnityContext({
        loaderUrl: "Build_Masktego/Build_Web.loader.js",
        dataUrl: "Build_Masktego/Build_Web.data",
        frameworkUrl: "Build_Masktego/Build_Web.framework.js",
        codeUrl: "Build_Masktego/Build_Web.wasm",
    });

    return (
        <div className="Combo_Col" style={{ width: "100vw", height: "160vh" }} >
            <div style={{ position: "absolute", left: "5vw", top: "3vw", width: "90vw", height: "90vh" }} >
                <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
            </div>
            <div style={{ position: "absolute", left: "5vw", top: "92vh", width: "90vw", height: "50vh" }} >
                <h1>
                    <b>Masktego Project</b>
                </h1>
                <p style={{ width: "70vw" }} >
                    <b>Github Frontend:</b> <a href="https://github.com/aandroth/Masktego_Frontend" target="_blank" rel="noopener noreferrer">Front-End</a>
                </p>
                <p style={{ width: "70vw" }} >
                    <b>Github Server:</b> <a href="https://github.com/aandroth/Masktego_Server" target="_blank" rel="noopener noreferrer">Server</a>
                </p> 
                <p style={{width: "70vw"}} >
                    <b>Masktego</b> is a 2D game developed using Unity, made for the Global Game Jam 2026 as a combination of Rock-Papers-Scissors and Stratego a boardgame where you can't see what the other player's pieces are (until they are attacked or get attacked). 
                </p>
                <p style={{width: "70vw"}} >
                    <b>Mechanics:</b> Each player's objective is to capture the other player's <b>Flag</b>. Each player takes turns to move a piece, and then they both do a swap the other player cannot see. The <b>Flag</b> and the <b>Bomb</b> cannot move and can only be swapped once per game. 
                </p>
                <p style={{width: "70vw"}} >
                    <b>Full Stack Structure:</b> The game is a full-stack application, with the front-end built in Unity and the back-end built in Node.js. The front-end communicates with the back-end using WebSockets, allowing for real-time multiplayer gameplay. The back-end handles some game logic, player matchmaking, and state management.
                </p>
                <p style={{width: "70vw"}} >
                    <b>Front-end:</b> The front-end is built in Unity as a WebGL build, which is then embedeed into this ReactJs website. The front-end handles user input, rendering, and communication with the back-end. It sends player actions to the back-end and receives game state updates in real-time.
                </p>
                <p style={{width: "70vw"}} >
                    <b>Websocket:</b> The bridge between the front-end and back-end is a WebSocket connection on AWS as a WebSocket API Gateway. The players send their moves to teh WebSocket, which are then passed on to the back-end. On creating the AWS Container for the backend, the WebSocket's callURL is passed as a parameter, which is then used by the back-end to send messages to teh WebSocket's clients.
                </p>
                <p style={{width: "70vw"}} >
                    <b>Back-end:</b> The back-end is run on an AWS Container in ECS, which is a Node.js application that handles game logic and communication between players. It receives player actions from the WebSocket, processes them, and sends game state updates back to the front-end in real-time using teh WebSocket's callbackURL.
                </p>
                <h1>
                    <b>Masktego Challenges</b>
                </h1>
                <p style={{ width: "70vw" }} >
                    To get the base gameplay I took inspiration from grid-based games like Fire Emblem where selecting a unit highlights that unit, and colors the grid squares to show the player where it can move and attack. 
                </p>
                <p style={{ width: "70vw" }} >
                    I especially like the gradual flip animation of each unit, and if revisited, I would add unique attack animations as well.
                </p>
                <p style={{ width: "70vw" }} >
                    This wasn't my first time working with WebSockets, but it was with the AWS WebSocket API Gateway. This presented some unique challenges as I had to write a Lambda function to establish the connection of the players, and to handle all of the messages.
                </p>
                <p style={{ width: "70vw" }} >
                    Before this I had not created a server management service. Players are able to reserve server names, join those servers, and then the ECS Container is created. This also had to account for players dropping out, the server crashing, and other edge cases.
                </p>
                <p style={{ width: "70vw" }} >
                    One of the biggest challenges to this project was getting the certificates set up so that players could play here on the web-page. I researched several different approaches, and settled on the WebSocket API letting AWS handle the ssl connection, and then just interacting with the ECS Container over http.
                </p>
                <p style={{ width: "70vw" }} >
                    To keep the costs for this service as low as possible, I opted to keep track of servers and players through text documents in S3. This was simple, but going forward, I would rather create and manage my own SQL endpoint for this task.
                </p>
            </div>
        </div>
    );
}

export default MasktegoMain;