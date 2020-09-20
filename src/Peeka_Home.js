import React, { useState } from 'react';

function Peeka_Home() {

    return (
        <div className="Pokemon_Info_Paperstack">
            <h1>
                University of Alaska Fairbanks
            </h1>
            <p>
                Learned Computer Science and Programming skills. My main focus in programming was graphics. This included several classes covering OpenGl, how graphics are rendered from hardware, and the math behind creating objects on the screen. Interested in the many applications of programming, I also took classes in creating AIs, websites, and design patterns.
            </p>
            <h1>
                Arctic Region Supercomputing Center
            </h1>
            <p>
                My first paid position as a programmer, I was put onto a team creating an iOS app for a science news outlet, Frontier Scientists. This news group promoted the research projects happening all over Alaska, and wanted a mobil-friendly version of their website with features like an interactive map, news articles, and downloading videos.
            </p>
            <h1>
                Dinaki Adventures
            </h1>
            <p>
                My final project for the UAF was with a team challenged to create a language learning game and level editor. After this final project was completed and turned in, I was contacted by the group who requested the software, and learned that it had not been given to them. I then took it upon myself to get the files for the project, finish it, and then delivered it to the customer.
            </p>
        </div>
    );
}

function Peeka_Home_Page(props) {

    const [showInfo, setShowInfo] = useState(true);

    return (
        <div style={{ width: "100%", height: "100%", }}>
            {showInfo && (
                <Peeka_Home />
            )}
        </div>
    );
}

export default Peeka_Home_Page;
