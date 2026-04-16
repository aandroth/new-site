import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as menuFns from './Utilities/MenuBarButtons'
import { Unity, useUnityContext } from "react-unity-webgl";

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
import HireMe_Resume from './HireMe_Resume';
import HireMe_Masktego from './HireMe_Masktego';

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
        <Router basename="/" className="pageBody">
	    <Routes>
            <Route path="/"        element={<HireMe />}/>
            <Route path="/home"          element={<HireMe />}/>

            <Route path="/peeka"         element={<HireMe_Peeka />} />
                <Route path="/hcl" element={<HireMe_HCL />} />
            <Route path="/resume" exact  element={<HireMe_Resume />} />
                <Route path="/masktego" element={<HireMe_Masktego />} />

                <Route path="/uaf_home" element={<UAF_Home />} />
                <Route path="/fsapp" element={<FS_App />} />
                <Route path="/profilefolder" element={<Profile_Folder />} />
                <Route path="/sketchpad" element={<SketchPad />} />
                <Route path="/checkersinfo" element={<CheckersInfo />} />
            <Route path="/pokemoninfo"   render={(props) => <PokemonInfo {...props} showFooterFn={showOrHideFooter} />} />
                <Route path="/dinaki" element={<Dinaki_Book />} />

                <Route path="/aie_home" element={<AIE_Home />} />
                <Route path="/gleethgod" element={<AIE_GleethGod />} />
                <Route path="/robotrepair" element={<AIE_RobotRepair />} />
                <Route path="/technoviking" element={<AIE_TechnoViking />} />

                <Route path="/graybubblegoo" element={<Peeka_GrayBubbleGoo />} />
                <Route path="/pearl" element={<Peeka_Pearl />} />
                <Route path="/rockhound" element={<Peeka_Rockhound />} />
                <Route path="/yukkityuck" element={<Peeka_YukkityUck />} />

                <Route path="/me" element={<HireMe />} />
                <Route path="/practicecards" element={<PracticeCards />} />
	</Routes>
        </Router>
    );
}

export default App;
