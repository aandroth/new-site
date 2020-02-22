import React from 'react';
import logo from './logo.svg';
import * as menuFns from './Utilities/MenuBarButtons'
import iOS_Menu from './Images/FS_Screens/iOS_Menu.png'
import paperStack from './Images/Paper_Stack_Tall.png'

function FS_App() {
    return (
        <div className="FS_App">
            <img src={iOS_Menu} alt="iOS_Menu" style={{ float: "left" }} />
            <div>
                <img src={paperStack} alt="Paper_Stack" />
                <p>
                    Text about the iOS app.
                </p>
            </div>
        </div>
    );
}
export default FS_App;