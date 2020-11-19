import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as menuFns from './Utilities/MenuBarButtons'

import UAF_Home from './UAF_Home';
import FS_App from './FS_App';
import Profile_Folder from './Profile_Folder';
import SketchPad from './SketchPad';
import CheckersInfo from './Checkers_Info';
import PokemonInfo from './Pokemon_Info';
import Dinaki_Book from './Dinaki.js';
import Menu_Bar_Space from "./Images/Menu_Bar_Space.png";

import AIE_Home from './AIE_Home';
import AIE_GleethGod from './AIE_GleethGod';
import AIE_RobotRepair from './AIE_RobotRepair.js';
import AIE_TechnoViking from './AIE_TechnoViking';

import Peeka_GrayBubbleGoo from './Peeka_GrayBubbleGoo';
import Peeka_Pearl from './Peeka_Pearl.js';
import Peeka_Rockhound from './Peeka_Rockhound';
import Peeka_YukkityUck from './Peeka_YukkityUck';

import HireMe from './HireMe';
import HireMe_Peeka from './HireMe_Peeka';
import HireMe_HCL from './HireMe_HCL';
import PracticeCards from './PracticeCards';

function Home() {
    return (
        <div className="App">
            <div className="App-Home">
            </div>
        </div>
    );
}

// List items from the Project menu section
//<li>
//    <div id="Menu_Pearl" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/pearl')} ></div>
//</li>
//    <li>
//        <div id="Menu_YukkityUck" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/yukkityuck')} ></div>
//    </li>
//    <li>
//        <div id="Menu_Rockhound" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/rockhound')} ></div>
//    </li>
//    <li>
//        <div id="Menu_GrayBubbleGoo" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/graybubblegoo')} ></div>
//    </li>

function App() {

    const [showFooter, setShowFooter] = useState(true);
    const [home_menuH, setHome_menuH] = useState(false);
    const [exp_home_menuH, setExp_home_menuH] = useState(false);
    const [edu_home_menuH, setEdu_home_menuH] = useState(false);
    const [proj_home_menuH, setProj_home_menuH] = useState(false);
    const [contact_home_menuH, setContact_home_menuH] = useState(false);

    const onEnterForAll = (hFn) => {
        setHome_menuH(false);
        setExp_home_menuH(false);
        setEdu_home_menuH(false);
        setProj_home_menuH(false);
        setContact_home_menuH(false);

        hFn(true);
    }

    const showOrHideFooter = (val) => {
        setShowFooter(val);
    }
    return (
        <Router basename="/">
            <div className="theBody">

                <Route path="/" exact component={HireMe} />
                <Route path="/home" component={HireMe} />

                <Route path="/peeka" component={HireMe_Peeka} />
                <Route path="/hcl" component={HireMe_HCL} />

                <Route path="/uaf_home" component={UAF_Home} />
                <Route path="/fsapp" component={FS_App} />
                <Route path="/profilefolder" component={Profile_Folder} />
                <Route path="/sketchpad" component={SketchPad} />
                <Route path="/checkersinfo" component={CheckersInfo} />
                <Route path="/pokemoninfo" render={(props) => <PokemonInfo {...props} showFooterFn={showOrHideFooter} />} />
                <Route path="/dinaki" component={Dinaki_Book} />

                <Route path="/aie_home" component={AIE_Home} />
                <Route path="/gleethgod" component={AIE_GleethGod} />
                <Route path="/robotrepair" component={AIE_RobotRepair} />
                <Route path="/technoviking" component={AIE_TechnoViking} />

                <Route path="/graybubblegoo" component={Peeka_GrayBubbleGoo} />
                <Route path="/pearl" component={Peeka_Pearl} />
                <Route path="/rockhound" component={Peeka_Rockhound} />
                <Route path="/yukkityuck" component={Peeka_YukkityUck} />

                <Route path="/me" component={HireMe} />
                <Route path="/practicecards" component={PracticeCards} />

                {showFooter && (
                    <footer>
                        <div className="Menu_Bar_Total">
                            <table className="Menu_Bar_Table">
                                <tr>
                                    <td>
                                        <div className="WAS_Menu_Bar_EndCap">
                                        </div>
                                    </td>
                                    <td>
                                        <div className="Menu_Bar_Button_Holder">
                                            <div className="Menu_Bar_Button_Outer" onMouseLeave={() => setHome_menuH(false)}>
                                                <div className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setHome_menuH)} onMouseUp={() => menuFns.mouseUp('/')} >
                                                    <img src={Menu_Bar_Space} width="100" height="100" className="Menu_Button_Space_Img" />
                                                    <div id="Menu_Top" className="Menu_Button_Menu_Img"></div>
                                                    {home_menuH && (
                                                        <div className="Menu_Button_Highlight"></div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="Menu_Bar_Button_Holder">
                                            <div className="Menu_Bar_Button_Outer" onMouseLeave={() => setExp_home_menuH(false)}>
                                                {exp_home_menuH && (
                                                    <div>
                                                        <ul className="Menu_List">
                                                            <li>
                                                                <div id="Menu_Peeka" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/peeka')} ></div>
                                                            </li>
                                                            <li>
                                                                <div id="Menu_HCL" className="Menu_List_Item" onMouseUp={() => menuFns.mouseUp('/hcl')} ></div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setExp_home_menuH)} onMouseUp={() => menuFns.mouseUp('/#Experience')} >
                                                    <img src={Menu_Bar_Space} width="100" height="100" className="Menu_Button_Space_Img" />
                                                    <div id="Menu_Exp" className="Menu_Button_Menu_Img"></div>
                                                    {exp_home_menuH && (
                                                        <div className="Menu_Button_Highlight"></div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="Menu_Bar_Button_Holder">
                                            <div className="Menu_Bar_Button_Outer" onMouseLeave={() => setEdu_home_menuH(false)}>
                                                {edu_home_menuH && (
                                                    <div>
                                                        <ul className="Menu_List">
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setEdu_home_menuH)} onMouseUp={() => menuFns.mouseUp('/#Education')} >
                                                    <img src={Menu_Bar_Space} width="100" height="100" className="Menu_Button_Space_Img" />
                                                    <div id="Menu_EDU" className="Menu_Button_Menu_Img"></div>
                                                    {edu_home_menuH && (
                                                        <div className="Menu_Button_Highlight"></div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="Menu_Bar_Button_Holder">
                                            <div className="Menu_Bar_Button_Outer" onMouseLeave={() => setProj_home_menuH(false)}>
                                                {proj_home_menuH && (
                                                    <div>
                                                        <ul className="Menu_List">
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setProj_home_menuH)} onMouseUp={() => menuFns.mouseUp('/#Projects')} >
                                                    <img src={Menu_Bar_Space} width="100" height="100" className="Menu_Button_Space_Img" />
                                                    <div id="Menu_Projects" className="Menu_Button_Menu_Img"></div>
                                                    {proj_home_menuH && (
                                                        <div className="Menu_Button_Highlight"></div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="Menu_Bar_Button_Holder">
                                            <div className="Menu_Bar_Button_Outer" onMouseLeave={() => setContact_home_menuH(false)} onMouseUp={() => menuFns.mouseUp('/#Contact')} >
                                                {contact_home_menuH && (
                                                    <div>
                                                        <ul className="Menu_List">
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="Menu_Bar_Button_Inner" onMouseEnter={() => onEnterForAll(setContact_home_menuH)}>
                                                    <img src={Menu_Bar_Space} width="100" height="100" className="Menu_Button_Space_Img" />
                                                    <div id="Menu_Contact" className="Menu_Button_Menu_Img"></div>
                                                    {contact_home_menuH && (
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
