import React, { useState } from 'react';
import Folder from './Images/top-secret-folder.png'
import FolderHighlight from './Images/top-secret-folder_highlight.png'
import Ipad from './Images/iOS_Menu_Screen.png'
import IpadHighlight from './Images/iOS_Menu_Screen_Highlight.png'
import Notepad from './Images/Notepad.png'
import NotepadHighlight from './Images/Notepad_Highlight.png'
import Checkerboard from './Images/CheckerBoardBox.png'
import CheckerboardHighlight from './Images/CheckerBoardBox_Highlight.png'
import Pokeball from './Images/Pokeball.png'
import PokeballHighlight from './Images/Pokeball_Highlight.png'
import BlueBook from './Images/Blue_Book.png'
import BlueBookHighlight from './Images/BB_Highlight.png'

//{pokemonInfoText}
function UAF_Home() {

    const [folderHighlight, setFolderHighlight] = useState(false);
    const [fsHighlight, setFsHighlight] = useState(false);
    const [sketchpadHighlight, setSketchpadHighlight] = useState(false);
    const [checkersHighlight, setCheckersHighlight] = useState(false);
    const [pokeballHighlight, setPokeballHighlight] = useState(false);
    const [dinakiHighlight, setDinakiHighlight] = useState(false);

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
                    University Schooling
                </h1>
                <p>
                    Blurb about going to UAF. GAH.
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
