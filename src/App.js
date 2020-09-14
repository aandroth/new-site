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
import Menu_Bar_Space from "./Images/Menu_Bar_Space.png";

import AIE_GleethGod from './AIE_GleethGod';
import AIE_RobotRepair from './AIE_RobotRepair.js';
import AIE_TechnoViking from './AIE_TechnoViking';

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
    const [uaf_home_menuH, setUaf_home_menuH] = useState(false);
    const [aie_home_menuH, setAie_home_menuH] = useState(false);
    const [peeka_home_menuH, setPeeka_home_menuH] = useState(false);
    const [hcl_home_menuH, setHcl_home_menuH] = useState(false);

    const onEnterForAll = (hFn) => {
        setUaf_home_menuH(false);
        setAie_home_menuH(false);
        setPeeka_home_menuH(false);
        setHcl_home_menuH(false);

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
                <Route path="/gleethgod" component={AIE_GleethGod} />
                <Route path="/robotrepair" component={AIE_RobotRepair} />
                <Route path="/technoviking" component={AIE_TechnoViking} />

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
                                            <div className="Menu_Bar_Button_Outer" onMouseLeave={() => setAie_home_menuH(false)}>
                                                {aie_home_menuH && (
                                                    <div>
                                                        <ul className="Menu_List">
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Gleeth" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/gleethgod')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Robo" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/robotrepair')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_TechnoViking" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/technoviking')} ></div>
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
                                    <td>
                                        <div className="Menu_Bar_Button_Holder">
                                            <div className="Menu_Bar_Button_Outer" onMouseLeave={() => setAie_home_menuH(false)}>
                                                {aie_home_menuH && (
                                                    <div>
                                                        <ul className="Menu_List">
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Gleeth" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/gleethgod')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_Robo" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/robotrepair')} ></div>
                                                            </li>
                                                            <li className="Menu_List_Item">
                                                                <div id="Menu_TechnoViking" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/technoviking')} ></div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setAie_home_menuH)}>
                                                    <img src={Menu_Bar_Space} width="100" height="100" className="Menu_Button_Space_Img" />
                                                    <div id="Menu_Peeka" className="Menu_Button_Menu_Img"></div>
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
