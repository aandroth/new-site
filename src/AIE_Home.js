import React, { useState } from 'react';

function UAF_Home() {

    return (
        <div className="Pokemon_Info_Paperstack">
            <h1>
                Academy of Interactive Entertainment
            </h1>
            <p>
                Focused my skills on game programming. The coursework at AIE covered graphics, AI, and general programming for games. My two year here had me creating several projects, participating game jams, and working on teams with artists, and vfx students as well.
            </p>
            <h1>
                Peeka
            </h1>
            <p>
                While attending AIE in my first year, I participated in an extra-curricluar project for a company creating children's books inside of Virtual Reality. I later joined this company helping to create more books.
            </p>
        </div>
    );
}

function UAF_Home_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <UAF_Home />
            )}
        </div>
    );
}

export default UAF_Home_Page;
