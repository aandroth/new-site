import React from 'react';

let dinakiGameText = "Dinaki Adventures is a point-and-click language-learning game, developed for the Telida Village Council of Alaska. The player creates a profile, and is then able to choose locations on a map. These locations can be locked, requiring the player to complete other locations first. Each location can have several minigames, where the player will associate English words or images with the written and spoken Dinaki words.";
let dinakiEditorText = "The Dinaki Adventures Editor is where the game levels are created. The interface was made using Qt, and allows the user to choose all aspects of the game and levels. The user can choose the minigame type, what levels are locked and what is required to unlock them. The word libraries are also created here, with the user choosing their spelling, male and female pronounciation, and a representing image. Because the user of the editor has so much control, it can really be used by any group for any language. The game and editor can be downloaded from my box.com files, and the source code can be found on Github, in a repo created by my partner on the project, Shawn Bond.";

function Dinaki_Book() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="Open_Dinaki_Book">
                <div className="Dinaki_Page_Block">
                    <h1 style={{ textAlign: "center" }}>The Game</h1>
                    <p>
                        {dinakiGameText}
				    </p>
                </div>
                <div className="Dinaki_Page_Block">
                    <h1 style={{ textAlign: "center" }}>The Editor</h1>
                    <p>
                        {dinakiEditorText}
				    </p>
                </div>
            </div>

        </div>
    );
}
export default Dinaki_Book;