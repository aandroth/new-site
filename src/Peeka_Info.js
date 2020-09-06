import React, { useState } from 'react';
import CartoonGameboy from './Images/Cartoon_Gameboy_Full.png'
import CartoonGameboyCover from './Images/Cartoon_Gameboy_Cover.png'
import CartoonGameboyHighlight from './Images/Cartoon_Gameboy_Full_Highlight.png'


function Pokemon_Info(props) {

    const [isShown, setIsShown] = useState(false);

    const peekaInfoText = "Bringing children's books to life with the power of Virtual Reality! With this team, I helped build out scenes inside of the Unity game engine. While this did include simply placing objects, I also created animations, programmed animations, and used our in-house created editor tools to both bring these books to life and allow the reader to interact with that world.";

    return (
        <div className="Pokemon_Info_Page">
            <img src={CartoonGameboy} alt="CartoonGameboy" style={{ position: "absolute", marginLeft: "5%", marginTop: "1%", width: "35%" }}
                onMouseEnter={() => setIsShown(true)}
                onMouseUp={() => props.goToGamePage()}
            />
            <div className="Pokemon_Info_Paperstack">
                <h1>
                    PeekaVR
                </h1>
                <p>
                    {peekaInfoText}
                </p>
            </div>
        </div>
    );
}

function Pokemon_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <Pokemon_Info />
            )}
        </div>
    );
}

export default Pokemon_Page;