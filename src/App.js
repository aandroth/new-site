import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as menuFns from './Utilities/MenuBarButtons'
import FS_App from './FS_App';
import Profile_Folder from './Profile_Folder';

function Home() {
    return (
        <div className="App">
            <div className="App-Home">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div style={{ width: "100%", height: "20%"}}>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router basename="/">
            <div className="theBody">
                <div style={{ width: "100%", height: "90%"}}>
                    <ul style={{ position: "absolute", right: "50px", backgroundColor: "Gray" }}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/fsapp">FS App</a></li>
                        <li><a href="/profilefolder">Profile_Folder</a></li>
                    </ul>

                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/fsapp" component={FS_App} />
                    <Route path="/profilefolder" component={Profile_Folder} />

                </div>
                <footer style={{ width: "100%", height: "10%"}}>
                    <div className="Menu_Bar_Total">
                        <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/Home')} /*onmousedown="mouseDown_MenuItem('Menu_Index_Highlight')" onmouseout="mouseOut_MenuItem('Menu_Index_Highlight')" onmouseover="mouseOver_MenuItem('Menu_Index_Highlight')" style={{ position: "absolute", top: "0%", left: "2%", width: "14%", height: "100%", float: "left" }}*/>
                            <div id="Menu_Index_Highlight">
                            </div>
                        </div>
                        <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/fsapp')} /*onmousedown="mouseDown_MenuItem('Menu_Index_Highlight')" onmouseout="mouseOut_MenuItem('Menu_Index_Highlight')" onmouseover="mouseOver_MenuItem('Menu_Index_Highlight')" style={{ position: "absolute", top: "0%", left: "2%", width: "14%", height: "100%", float: "left" }}*/>
                            <div id="Menu_Index_Highlight">
                            </div>
                        </div>
                        <div className="Menu_Bar_Button_Outer" onMouseUp={() => menuFns.mouseUp('/profilefolder')} /*onmousedown="mouseDown_MenuItem('Menu_Index_Highlight')" onmouseout="mouseOut_MenuItem('Menu_Index_Highlight')" onmouseover="mouseOver_MenuItem('Menu_Index_Highlight')" style={{ position: "absolute", top: "0%", left: "2%", width: "14%", height: "100%", float: "left" }}*/>
                            <div id="Menu_Index_Highlight">
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
  );
}
//<Route path="/" exact component={Home} />
//    <Route path="/home" component={Home} />

//<div onmouseup="mouseUp('Folder.php')" onmousedown="mouseDown_MenuItem('Menu_Folder_Highlight')" onmouseout="mouseOut_MenuItem('Menu_Folder_Highlight')" onmouseover="mouseOver_MenuItem('Menu_Folder_Highlight')" style="position:absolute; top:0%; left:16%; width:13.5%; height:100%; float:left;">
//    <div id="Menu_Folder_Highlight" style="visibility:hidden; pointer-events:none; position:absolute; top:0%; left:0%; width:100.5%; height:100%; float:left; background-color:rgba(100, 100, 255, 0.5);">
//    </div>
//</div>
//    <div onmouseup="mouseUp('iOS_Pages/iOS_Menu.php')" onmousedown="mouseDown_MenuItem('Menu_FS_Highlight')" onmouseout="mouseOut_MenuItem('Menu_FS_Highlight')" onmouseover="mouseOver_MenuItem('Menu_FS_Highlight')" style="position:absolute; top:0%; left:29.5%; width:15%; height:100%; float:left;">
//        <div id="Menu_FS_Highlight" style="visibility:hidden; pointer-events:none; position:absolute; top:0%; left:0%; width:100.5%; height:100%; float:left; background-color:rgba(100, 100, 255, 0.5);">
//        </div>
//    </div>
//    <div onmouseup="mouseUp('Canvas.php')" onmousedown="mouseDown_MenuItem('Menu_Sketchpad_Highlight')" onmouseout="mouseOut_MenuItem('Menu_Sketchpad_Highlight')" onmouseover="mouseOver_MenuItem('Menu_Sketchpad_Highlight')" style="position:absolute; top:0%; left:44.5%; width:14%; height:100%; float:left;">
//        <div id="Menu_Sketchpad_Highlight" style="visibility:hidden; pointer-events:none; position:absolute; top:0%; left:0%; width:100.5%; height:100%; float:left; background-color:rgba(100, 100, 255, 0.5);">
//        </div>
//    </div>
//    <div onmouseup="mouseUp('Checkerboard.php')" onmousedown="mouseDown_MenuItem('Menu_Checkers_Highlight')" onmouseout="mouseOut_MenuItem('Menu_Checkers_Highlight')" onmouseover="mouseOver_MenuItem('Menu_Checkers_Highlight')" style="position:absolute; top:0%; left:58%; width:15%; height:100%; float:left;">
//        <div id="Menu_Checkers_Highlight" style="visibility:hidden; pointer-events:none; position:absolute; top:0%; left:0%; width:100.5%; height:100%; float:left; background-color:rgba(100, 100, 255, 0.5);">
//        </div>
//    </div>
//    <div onmouseup="mouseUp('PokeGameIntro.php')" onmousedown="mouseDown_MenuItem('Menu_PokeBall_Highlight')" onmouseout="mouseOut_MenuItem('Menu_PokeBall_Highlight')" onmouseover="mouseOver_MenuItem('Menu_PokeBall_Highlight')" style="position:absolute; top:0%; left:73%; width:15%; height:100%; float:left;">
//        <div id="Menu_PokeBall_Highlight" style="visibility:hidden; pointer-events:none; position:absolute; top:0%; left:0%; width:100.5%; height:100%; float:left; background-color:rgba(100, 100, 255, 0.5);">
//        </div>
//    </div>
//    <div onmouseup="mouseUp('Dinaki_Adventures.php')" onmousedown="mouseDown_MenuItem('Menu_Dinaki_Highlight')" onmouseout="mouseOut_MenuItem('Menu_Dinaki_Highlight')" onmouseover="mouseOver_MenuItem('Menu_Dinaki_Highlight')" style="position:absolute; top:0%; left:88%; width:11.9%; height:100%; float:left;">
//        <div id="Menu_Dinaki_Highlight" style="visibility:hidden; pointer-events:none; position:absolute; top:0%; left:0%; width:100.5%; height:100%; float:left; background-color:rgba(100, 100, 255, 0.5);">
//        </div>
//    </div>
export default App;
