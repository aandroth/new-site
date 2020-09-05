import React, { useState } from 'react';
import CartoonGameboy from './Images/Cartoon_Gameboy_Full.png'
import CartoonGameboyCover from './Images/Cartoon_Gameboy_Cover.png'
import CartoonGameboyHighlight from './Images/Cartoon_Gameboy_Full_Highlight.png'

function Pokemon_Game(props) {

    //const [source, setSource] = useState("http://localhost/PokeGame.php");
    const [source, setSource] = useState("http://aquinsgreatgames.com:7777/PokeGame.php");

    window.onload = () =>{
        document.getElementById("iframeWindow").focus();
        setSource();
    }

    const Iframe = ({ source }) => {
        if (!source) {
            return <div>Loading...</div>;
        }

        return (
            <div style={{ width: "100%", height: "100%" }} >
                <div style={{ width: "100%", height: "100%" }}>
                    <iframe id="iframeWindow" type="application/x-shockwave-flash" src={source} style={{ position:"absolute", left: "15%",}} width="70%" height="100%" >
                    </iframe>
                </div>
                <img url={CartoonGameboyCover} className="Gameboy_Cover" width="100%" height="100%" />
                <div className="Gameboy_Button_Stop" onMouseUp={() => props.goToInfoPage()} >
                </div>
            </div>
        );
    };
    
    return (
        <div style={{ width: "100%", height:"100%" }}>
            <div className="Gameboy_Face_Bg">
                <Iframe source={source} />
            </div >
        </div>
    );
}
//

function Pokemon_Info(props) {

    const [gameBoyHighlight, setGameBoyHighlight] = useState(false);

    const pokemonInfoText = "This game was created in Macromedia Flash MX, using Java as the coding language. It was birthed from the idea that the player can start with any pokemon type that they would like. The controls are the arrow keys for movement, and the space bar for selections. Like the website, this game is very much a work in progress, so check back as I add in the other pokemon types! Controls are the Arrow Keys and the Space Bar. To get started, just click on the Gameboy.";

    return (
        <div className="Pokemon_Info_Page">
            <img src={CartoonGameboy} alt="CartoonGameboy" style={{ position: "absolute", marginLeft: "5%", marginTop: "1%", width: "35%" }}
                onMouseEnter={() => setGameBoyHighlight(true)}
                onMouseUp={() => props.goToGamePage()}
            />
            {gameBoyHighlight && (
                <img src={CartoonGameboyHighlight} alt="CartoonGameboy" style={{ position: "absolute", marginLeft: "5%", marginTop: "1%", width: "35%", }}
                    onMouseLeave={() => setGameBoyHighlight(false)}
                    onMouseUp={() => props.goToGamePage()}
                />
            )}
            <div className="Pokemon_Info_Paperstack">
                <h1>
                    Pokemon Beginnings
                </h1>
                <p>
                    {pokemonInfoText}
                </p>
            </div>
        </div>
    );
}

function Pokemon_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    const showGameFn = () => {
        setShowInfo(false);
        props.showFooterFn(false);
    }

    const showInfoFn = () => {
        setShowInfo(true);
        props.showFooterFn(true);
    }

    window.onload = () => {
        props.showFooterFn(true);
    }

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <Pokemon_Info showFooterFn={props.showFooterFn} goToGamePage={showGameFn} />
            )}
            {!showInfo && (
                <Pokemon_Game showFooterFn={props.showFooterFn} goToInfoPage={showInfoFn} />
            )}
        </div>
    );
}

export default Pokemon_Page;
