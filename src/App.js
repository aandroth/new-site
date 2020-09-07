import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as menuFns from './Utilities/MenuBarButtons'
import FS_App from './FS_App';
import Profile_Folder from './Profile_Folder';
import SketchPad from './SketchPad';
import CheckersInfo from './Checkers_Info';
import PokemonInfo from './Pokemon_Info';
import Dinaki_Book from './Dinaki.js';

function Home() {
    return (
        <div className="App">
            <div className="App-Home">
            </div>
        </div>
    );
}

function App() {

    const [showFooter, setShowFooter] = useState(true);
    const [homeH, setHomeH] = useState(false);
    const [uaf_home_menu, setUaf_home_menuH] = useState(false);
    const [folderH, setFolderH] = useState(false);
    const [fsH, setFsH] = useState(false);
    const [sketchH, setSketchH] = useState(false);
    const [checkersH, setCheckersH] = useState(false);
    const [pokeballH, setPokeballH] = useState(false);
    const [bookH, setBookH] = useState(false);

    const onEnterForAll = (hFn) => {
        setHomeH(false);
        setFolderH(false);
        setFsH(false);
        setSketchH(false);
        setCheckersH(false);
        setPokeballH(false);
        setBookH(false);

        hFn(true);
    }

    const showOrHideFooter = (val) => {
        setShowFooter(val);
    }

    //<div className="Menu_Button_Highlight" onMouseLeave={() => setHomeH(false)} ></div>

    return (
        <Router basename="/">
            <div className="theBody">

                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/fsapp" component={FS_App} />
                <Route path="/profilefolder" component={Profile_Folder} />
                <Route path="/sketchpad" component={SketchPad} />
                <Route path="/checkersinfo" component={CheckersInfo} />
                <Route path="/pokemoninfo" render={(props) => <PokemonInfo {...props} showFooterFn={showOrHideFooter} /> } />
                <Route path="/dinaki" component={Dinaki_Book} />

                <div className="container">
                    <button type="button" class="button">
                        BB
                    </button>
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                </div>

                {showFooter && (
                    <footer>
                        <div className="Menu_Bar_Total">
                            <div className="Menu_Bar_EndCap">
                            </div>
                            <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/uaf_home')} >
                                <div id="Menu_Home" className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setHomeH)}>
                                    {homeH && (
                                        <div className="Menu_Button_Menu" onMouseLeave={() => setHomeH(false)}>
                                            <div className="Menu_Button_Highlight"></div>
                                            <div className="Menu_Button_Highlight"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/profilefolder')}>
                                <div id="Menu_Profile" className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setFolderH)}>
                                    {folderH && (
                                        <div className="Menu_Button_Highlight" onMouseLeave={() => setFolderH(false)} ></div>
                                    )}
                                </div>
                            </div>
                            <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/fsapp')}>
                                <div id="Menu_FS" className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setFsH)}>
                                    {fsH && (
                                        <div className="Menu_Button_Highlight" onMouseLeave={() => setFsH(false)} ></div>
                                    )}
                                </div>
                            </div>
                            <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/sketchpad')}>
                                <div id="Menu_Sketchpad" className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setSketchH)}>
                                    {sketchH && (
                                        <div className="Menu_Button_Highlight" onMouseLeave={() => setSketchH(false)} ></div>
                                    )}
                                </div>
                            </div>
                            <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/checkersinfo')}>
                                <div id="Menu_Checkers" className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setCheckersH)}>
                                    {checkersH && (
                                        <div className="Menu_Button_Highlight" onMouseLeave={() => setCheckersH(false)} ></div>
                                    )}
                                </div>
                            </div>
                            <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/pokemoninfo')}>
                                <div id="Menu_Pokeball" className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setPokeballH)}>
                                    {pokeballH && (
                                        <div className="Menu_Button_Highlight" onMouseLeave={() => setPokeballH(false)} ></div>
                                    )}
                                </div>
                            </div>
                            <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/dinaki')}>
                                <div id="Menu_Dinaki" className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setBookH)}>
                                    {bookH && (
                                        <div className="Menu_Button_Highlight" onMouseLeave={() => setBookH(false)} ></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </footer>
                )}
            </div>
        </Router>
  );
}
//<div id="Menu_Index_Highlight">
//    {isShown && (
//        <div onMouseLeave={() => setIsShown(false)} ></div>
//    )}
//</div>

export default App;
