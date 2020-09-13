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
import PeekaInfo from './Peeka_Info';
import Dinaki_Book from './Dinaki.js';
import Menu_Bar_Space from "./Images/Menu_Bar_Space.png";
import Menu_Bar_Folder from "./Images/Menu_Bar_Folder.png";
import Menu_Bar_FS from "./Images/Menu_Bar_FS.png";

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
    const [uaf_home_menuH, setUaf_home_menuH] = useState(false);
    const [aie_home_menuH, setAie_home_menuH] = useState(false);
    const [folderH, setFolderH] = useState(false);
    const [fsH, setFsH] = useState(false);
    const [sketchH, setSketchH] = useState(false);
    const [checkersH, setCheckersH] = useState(false);
    const [pokeballH, setPokeballH] = useState(false);
    const [bookH, setBookH] = useState(false);

    const onEnterForAll = (hFn) => {
        setHomeH(false);
        setUaf_home_menuH(false);
        setAie_home_menuH(false);
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
    return (
        <Router basename="/">
            <div className="theBody">

                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/fsapp" component={FS_App} />
                <Route path="/profilefolder" component={Profile_Folder} />
                <Route path="/sketchpad" component={SketchPad} />
                <Route path="/checkersinfo" component={CheckersInfo} />
                <Route path="/pokemoninfo" render={(props) => <PokemonInfo {...props} showFooterFn={showOrHideFooter} />} />
                <Route path="/dinaki" component={Dinaki_Book} />

                {showFooter && (
                    <footer>
                        <div className="Menu_Bar_Total">
                            <table className="Menu_Bar_Table">
                                <tr>
                                    <td>
                                        <div className="Menu_Bar_EndCap">
                                        </div>
                                    </td>
                                    <td>
                                        <div className="Menu_Bar_Button_Holder">
                                            <div className="Menu_Bar_Button_Outer" onMouseLeave={() => setUaf_home_menuH(false)}>
                                                {uaf_home_menuH && (
                                                    <div>
                                                        <ul className="Menu_List">
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_FS" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/fsapp')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Profile" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/profilefolder')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Sketchpad" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/sketchpad')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Checkers" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/checkersinfo')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Pokeball" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/pokemoninfo')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Dinaki" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/dinaki')} ></div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setUaf_home_menuH)} onMouseUp={() => menuFns.mouseUp('/uaf_home')} >
                                                    <img src={Menu_Bar_Space} width="100" height="100" className="Menu_Button_Space_Img" />
                                                    <div id="Menu_UAF" className="Menu_Button_Menu_Img"></div>
                                                    {uaf_home_menuH && (
                                                        <div className="Menu_Button_Highlight"></div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="Menu_Bar_Button_Holder">
                                            <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/uaf_home')} onMouseLeave={() => setAie_home_menuH(false)}>
                                                {aie_home_menuH && (
                                                    <div>
                                                        <ul className="Menu_List">
                                                            <li className="Menu_List_Item">

                                                                <div id="Menu_Gleeth" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/uaf_home')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_TechnoViking" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/uaf_home')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Robo" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/uaf_home')} ></div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setAie_home_menuH)}>
                                                    <img src={Menu_Bar_Space} width="100" height="100" className="Menu_Button_Space_Img" />
                                                    <div id="Menu_AIE" className="Menu_Button_Menu_Img"></div>
                                                    {aie_home_menuH && (
                                                        <div className="Menu_Button_Highlight"></div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </footer>
                )}
            </div>
        </Router>
    );
}

export default App;
