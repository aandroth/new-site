import React from 'react';
import iOS_Menu from './Images/FS_Screens/iOS_Menu.png'
import paperStack from './Images/Paper_Stack_Tall.png'

function Profile_Folder() {
    return (
        <div className="Open_Folder">
            <div>
                <img src={paperStack} alt="Paper_Stack" />
                <p>
                    Text about the iOS app.
				</p>
            </div>
            <div>
                <img src={paperStack} alt="Paper_Stack" />
                <p>
                    Text about the iOS app.
				</p>
            </div>
        </div>
    );
}
export default Profile_Folder;