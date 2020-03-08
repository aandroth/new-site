import React, { useState, useEffect } from 'react';


function FS_Intro(props) {

    const [researchH, setResearchH] = useState(false);
    const [videoH, setVideoH] = useState(false);
    const [mapH, setMapH] = useState(false);
    const [articlesH, setArticlesH] = useState(false);
    const [askH, setAskH] = useState(false);
    const [aboutH, setAboutH] = useState(false);

    const onEnterForAll = (hFn) => {
        setResearchH(false);
        setVideoH(false);
        setMapH(false);
        setArticlesH(false);
        setAskH(false);
        setAboutH(false);

        hFn(true);
    }

    const fsInfoText = <p>This app was created for the news group, Frontier Scientists, by student workers at the Artcic Region Supercomputing Center. The purpose of this app is to take the information from Frontier Scientists' website, <a href="https://frontierscientists.com/">frontierscientists.com</a>, and put it into a unique, mobile-friendly format. My role on this project was that of software developer, coding the pages of the app, and making sure that they worked across iOS and iPad devices, making sure that data was translated correctly from the website files, and that the interface was appealing and user-friendly. As I had no previous experience with mobile development, this was a great learning experience, where I learned and implemented Objective C, Swift, and a bit of PHP and MySQL. This app was created by a collection of artists and programmers, and is still seeing development and tweaks. The data for the app is supplied a document from the Frontier Scientists' web administrator, and use a script to convert the file into XML for the app to download. This script was originally written in PHP and MySQL by myself and fellow programmer, Andrew Clark, and has since been updated with Python by one of the later developers, Jay Byam, who helped create the Android version. The iPad here replicates the base functionality of the app. Check out the actual app on the <a href="https://apps.apple.com/us/app/frontier-scientists-media/id947094470">App Store</a> and <a href="">Google Play!</a></p>

    return (
        <div style={{ width: "100%", height:"100%" }}>
            <div id="ios_menu" className="iOS_App">
                <div style={{ position: "absolute", marginLeft: "2.75%", marginTop: "5%", width: "23%", height: "28%" }}>
                    <div className="FS_Button_Outer" onMouseEnter={() => onEnterForAll(setResearchH)}>
                        {researchH && (<div className="FS_Button_Inner" onClick={() => props.changePageFn("Research")} onMouseLeave={() => setResearchH(false)}></div>)}
                    </div>
                    <div className="FS_Button_Outer" onMouseEnter={() => onEnterForAll(setVideoH)}>
                        {videoH && (<div className="FS_Button_Inner" onClick={() => props.changePageFn("Videos")} onMouseLeave={() => setVideoH(false)}></div>)}
                    </div>
                    <div className="FS_Button_Outer" onMouseEnter={() => onEnterForAll(setMapH)}>
                        {mapH && (<div className="FS_Button_Inner" onClick={() => props.changePageFn("Map")} onMouseLeave={() => setMapH(false)}></div>)}
                    </div>
                    <div className="FS_Button_Outer" onMouseEnter={() => onEnterForAll(setArticlesH)}>
                        {articlesH && (<div className="FS_Button_Inner" onClick={() => props.changePageFn("Articles")} onMouseLeave={() => setArticlesH(false)}></div>)}
                    </div>
                    <div className="FS_Button_Outer" onMouseEnter={() => onEnterForAll(setAskH)}>
                        {askH && (<div className="FS_Button_Inner" onClick={() => props.changePageFn("Ask")} onMouseLeave={() => setAskH(false)}></div>)}
                    </div>
                    <div className="FS_Button_Outer" onMouseEnter={() => onEnterForAll(setAboutH)}>
                        {aboutH && (<div className="FS_Button_Inner" onClick={() => props.changePageFn("About")} onMouseLeave={() => setAboutH(false)}></div>)}
                    </div>
                </div>
            </div>
            <div className="FS_Info_Paperstack">
                <h1>Frontier Scientists Media</h1>
                <p>
                    {fsInfoText}
                </p>
            </div>
        </div>
    );
}

function FS_Research(props) {

    const [backH, setBackH] = useState(false);
    const [videoH, setVideoH] = useState(false);
    const [mapH, setMapH] = useState(false);

    const onEnterForAll = (hFn) => {
        setBackH(false);
        setVideoH(false);
        setMapH(false);

        hFn(true);
    }
    const fsResearchText = <p>The research section shows all of the different Arctic science projects that Frontier Scientists is following. Each project has its own identifying image (which shows up in other pages), and a short article describing it. These pages also have links to the Map and the Videos pages as well, so that the user can quickly get more information on them.</p>

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div id="ios_research" className="iOS_App">
                <div className="FS_Button_Outer_Back" onMouseEnter={() => onEnterForAll(setBackH)}>
                    {backH && (<div className="FS_Button_Inner"
                        onMouseLeave={() => setBackH(false)}
                        onClick={() => props.changePageFn("Intro_Menu")}
                    ></div>)}
                </div>
                <div style={{ backgroundColor: "green", width: "100%", height: "100%", position: "relative", top: "0px", left: "0px" }}></div>
                <div style={{ position: "absolute", marginLeft: "2.75%", marginTop: "24%", width: "23%", height: "14%" }}>
                    <div className="FS_Button_Outer_Research" onMouseEnter={() => onEnterForAll(setVideoH)}>
                        {videoH && (<div className="FS_Button_Inner"
                            onMouseLeave={() => setVideoH(false)}
                            onClick={() => props.changePageFn("Videos")}
                        ></div>)}
                    </div>
                    <div className="FS_Button_Outer_Research" onMouseEnter={() => onEnterForAll(setMapH)}>
                        {mapH && (<div className="FS_Button_Inner"
                            onMouseLeave={() => setMapH(false)}
                            onClick={() => props.changePageFn("Map")}
                        ></div>)}
                    </div>
                </div>
            </div>
            <div className="FS_Info_Paperstack">
                <h1>Research</h1>
                <p>
                    {fsResearchText}
                </p>
            </div>
        </div >
    );
}

function FS_Videos(props) {

    const [backH, setBackH] = useState(false);
    const [video0H, setVideo0H] = useState(false);
    const [video1H, setVideo1H] = useState(false);
    const [video2H, setVideo2H] = useState(false);
    const [showVideoList, setShowVideoList] = useState(false);
    const [showVideoPlayer, setShowVideoPlayer] = useState(false);

    const [appBgId, setAppBgId] = useState("ios_video");
    const [ytId, setYtId] = useState("0mc4Y7QVjQ0");
    const [toggleH, setToggleH] = useState(false);

    const turnOffAllHighlights = () => {
        setBackH(false);
        setVideo0H(false);
        setVideo1H(false);
        setVideo2H(false);
    }

    const onEnterForAll = (hFn) => {
        turnOffAllHighlights();
        hFn(true);
    }
    const fsVideosText = <p>The video page shows all of the different videos that Frontier Scientists has made of each project. The videos are viewed by activating the drop-down, and selecting a video. We also have video downloading, as the thought was that the app may be used by tourists, who would not have access to wifi when off the beaten path, such as when taking a tour. This means that the user could download a video, watch in on a tour, and then delete it when they are done.</p>


    const toggleVideoList = () => {
        if (appBgId === "ios_video") {
            setAppBgId("ios_video_open");
            setShowVideoList(true);
        }
        else {
            setAppBgId("ios_video");
            setShowVideoList(false);
        }
    };

    const goToVideoPlayer = (_ytId) => {
        turnOffAllHighlights();
        setYtId(_ytId);
        setShowVideoPlayer(true);
    };

    return (
        <div style={{ width: "100%", height: "100%" }}>
            {!showVideoPlayer && (
                <div style={{ width: "100%", height: "100%" }}>
                    <div id={appBgId} className="iOS_App">
                        <div className="FS_Button_Outer_Back_Videos" onMouseEnter={() => onEnterForAll(setBackH)}>
                            {backH && (<div className="FS_Button_Inner"
                                onMouseLeave={() => setBackH(false)}
                                onClick={() => props.changePageFn("Intro_Menu")}
                            ></div>)}
                        </div>
                        <div style={{ position: "absolute", width: "3.5%", height: "5%", top: "21%", left: "5%" }} onMouseEnter={() => setToggleH(true)}>
                            {toggleH && (<div className="FS_Button_Inner"
                                onMouseLeave={() => setToggleH(false)}
                                onClick={() => toggleVideoList()}
                            ></div>)}
                        </div>
                        {showVideoList && (
                            <div style={{ position: "absolute", marginLeft: "2.65%", marginTop: "10.5%", width: "23.5%", height: "14%" }}>
                                <div className="FS_Button_Outer_Video" onMouseEnter={() => onEnterForAll(setVideo0H)}>
                                    {video0H && (<div className="FS_Button_Inner"
                                        onMouseLeave={() => setVideo0H(false)}
                                        onClick={() => goToVideoPlayer("0mc4Y7QVjQ0")}
                                    ></div>)}
                                </div>
                                <div className="FS_Button_Outer_Video" onMouseEnter={() => onEnterForAll(setVideo1H)}>
                                    {video1H && (<div className="FS_Button_Inner"
                                        onMouseLeave={() => setVideo1H(false)}
                                        onClick={() => goToVideoPlayer("s5dFBRVhIHA")}
                                    ></div>)}
                                </div>
                                <div className="FS_Button_Outer_Video" onMouseEnter={() => onEnterForAll(setVideo2H)}>
                                    {video2H && (<div className="FS_Button_Inner"
                                        onMouseLeave={() => setVideo2H(false)}
                                        onClick={() => goToVideoPlayer("IaTqnR2pzR4")}
                                    ></div>)}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="FS_Info_Paperstack">
                        <h1>Videos</h1>
                        {fsVideosText}
                    </div> 
                </div>
            )}
            {showVideoPlayer && (
                <FS_Video_Player backToVideoListFn={setShowVideoPlayer} YTid={ytId} />
            )}
        </div >
    );
}

function FS_Video_Player(props) {

    const [backH, setBackH] = useState(false);

    return (
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
            <iframe src={"http://localhost/iOS_Pages/iOS_Videos_Watching.php?YTid=" + props.YTid} width="100%" height="100%" />
            <div className="iOS_Video_Player_Back_Button" onMouseEnter={() => setBackH(true)}>

                {backH && (<div className="FS_Button_Inner"
                    onMouseLeave={() => setBackH(false)}
                    onClick={() => props.backToVideoListFn(false)}
                >
                </div>)}
            </div>
        </div >
    );
}

function FS_Map(props) {

    const [backH, setBackH] = useState(false);
    const [researchH, setResearchH] = useState(false);

    const fsMapText = <p>This interactive map allows users to see the approximate locations (they don't want tourists visiting) of the different Arctic research projects being done through the state of Alaska. When the user selects a location, they get to see a custom popup, that has the image of the research project, and a button that links to the Research page for that project.</p>

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div id="ios_map" className="iOS_App">
                <div className="FS_Button_Outer_Back" onMouseEnter={() => setBackH(true)}>
                    {backH && (<div className="FS_Button_Inner"
                        onMouseLeave={() => setBackH(false)}
                        onClick={() => props.changePageFn("Intro_Menu")}
                    ></div>)}
                </div>
                <div style={{ position: "absolute", marginLeft: "11.1%", marginTop: "13%", width: "6%", height: "7%" }}>
                    <div className="FS_Button_Outer_Research" onMouseEnter={() => setResearchH(true)}>
                        {researchH && (<div className="FS_Button_Inner"
                            onMouseLeave={() => setResearchH(false)}
                            onClick={() => props.changePageFn("Research")}
                        ></div>)}
                    </div>
                </div>
            </div>
            <div className="FS_Info_Paperstack">
                <h1>Map</h1>
                <p>
                    {fsMapText}
                </p>
            </div>
        </div >
    );
}

function FS_Articles(props) {

    const [backH, setBackH] = useState(false);
    const [article0H, setArticle0H] = useState(false);
    const [article1H, setArticle1H] = useState(false);
    const [article2H, setArticle2H] = useState(false);
    const [showArticles, setShowArticles] = useState(true);
    const [articleUrl, setArticleUrl] = useState("https://frontierscientists.com/2014/11/lab-fridge-arctic-ground-squirrels/");

    const turnOffAllHighlights = () => {
        setBackH(false);
        setArticle0H(false);
        setArticle1H(false);
        setArticle2H(false);
    }

    const onEnterForAll = (hFn) => {
        turnOffAllHighlights();
        hFn(true);
    }

    const backButtonPressed = () => {
        if (!showArticles) {
            setShowArticles(true);
        }
        else {
            props.changePageFn("Intro_Menu")
        }
    }

    const articleButtonPressed = (url) => {
        setArticleUrl(url);
        setShowArticles(false);
        turnOffAllHighlights();
    }

    const fsArticleText = <p>The Articles page has the ten most recent articles posted to <a href="https://frontierscientists.com/">frontierscientists.com</a>. By selecting an article, the user will have a limited web browser window opened. This window only allows the user to move through links on the page they are on, so that they are not able to navigate away to a general browser. Doing this was one way we ensured that our app would qualify for an all-ages rating. Every article that the user has not read will have the "new" symbol, which goes away when the user selects that article to read. In fact, there is an article <a href="https://frontierscientists.com/mobile-app/">here</a> on the Frontier Scientists mobile app!</p>

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div id="ios_articles" className="iOS_App">
                <div style={{ position: "absolute", marginLeft: "2.7%", marginTop: "3.5%", width: "23%", height: "56%" }}>
                    {showArticles && (
                        <div style={{ width: "100%", height: "100%" }}>
                            <div className="FS_Button_Outer_Articles" onMouseEnter={() => onEnterForAll(setArticle0H)}>
                                {article0H && (<div className="FS_Button_Inner"
                                    onMouseLeave={() => setArticle0H(false)}
                                    onClick={() => articleButtonPressed("https://frontierscientists.com/2014/11/lab-fridge-arctic-ground-squirrels/")}
                                ></div>)}
                            </div>
                            <div className="FS_Button_Outer_Articles" onMouseEnter={() => onEnterForAll(setArticle1H)}>
                                {article1H && (<div className="FS_Button_Inner"
                                    onMouseLeave={() => setArticle1H(false)}
                                    onClick={() => articleButtonPressed("https://frontierscientists.com/2014/11/many-angles-fdl-science/")}
                                ></div>)}
                            </div>
                            <div className="FS_Button_Outer_Articles" onMouseEnter={() => onEnterForAll(setArticle2H)}>
                                {article2H && (<div className="FS_Button_Inner"
                                    onMouseLeave={() => setArticle2H(false)}
                                    onClick={() => articleButtonPressed("https://frontierscientists.com/2014/11/effective-stress-fdl-science/")}
                                ></div>)}
                            </div>
                        </div>
                    )}
                    {!showArticles && (
                        <iframe src={articleUrl} width="100%" height="100%" />
                    )}
                </div>
                <div className="FS_Button_Outer_Back_Articles" onMouseEnter={() => setBackH(true)}>
                    {backH && (<div className="FS_Button_Inner"
                        onMouseLeave={() => setBackH(false)}
                        onClick={() => backButtonPressed()}
                    ></div>)}
                </div>
            </div>
            <div className="FS_Info_Paperstack">
                <h1>Articles</h1>
                <p>
                    {fsArticleText}
                </p>
            </div>
        </div >
    );
}

function FS_Ask(props) {

    const [backH, setBackH] = useState(false);
    const [scientistH, setScientistH] = useState(false);
    const [askH, setAskH] = useState(false);
    const [showVideoPlayer, setShowVideoPlayer] = useState(false);

    const [appBgId, setAppBgId] = useState("ios_ask");
    const [showAsk, setShowAsk] = useState(true);

    const ytId = "oZUBzTg08TI";

    const turnOffAllHighlights = () => {
        setBackH(false);
        setScientistH(false);
        setAskH(false);
    }

    const onEnterForAll = (hFn) => {
        turnOffAllHighlights();
        hFn(true);
    }
    const fsAskText = <p>This page allows the user to view information about the scientist on-call, a rotating list of scientists that have agreed to answer emails from interested users of the app or visitors to the Frontier Scientists' website. These emails are sent to Liz O`Connell, the Frontier Scientists director, who will verify the email as a good question, and then send it off to the scientist. The user can also watch an introductory video of the on-call scientist, where they introduce themselves and their background. This page allows the user to send a modified email. The user puts in their name, the subject, and their question. When they select the send button, their preferred email app comes up to allow any further modification. Because this email first gets sent to the Frontier Scientists inbox, before being sent to the on-call scientist, The subject line gets "[frontsci]" added to it so that the inbox can specifically filter for those. This page also lets the user see a video bio of the on-call scientist.</p>

    const toggleEmail = () => {
        turnOffAllHighlights();
        if (appBgId === "ios_ask") {
            setAppBgId("ios_ask_email");
            setShowAsk(false);
        }
        else {
            setAppBgId("ios_ask");
            setShowAsk(true);
        }
    };

    const goToVideoPlayer = () => {
        turnOffAllHighlights();
        setShowVideoPlayer(true);
    };

    return (
        <div style={{ width: "100%", height: "100%" }}>
            {!showVideoPlayer && (
                <div style={{ width: "100%", height: "100%" }}>
                    <div id={appBgId} className="iOS_App">
                        {showAsk && (
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="FS_Button_Outer_Back" onMouseEnter={() => onEnterForAll(setBackH)}>
                                    {backH && (<div className="FS_Button_Inner"
                                        onMouseLeave={() => setBackH(false)}
                                        onClick={() => props.changePageFn("Intro_Menu")}
                                    ></div>)}
                                </div>
                                <div style={{ position: "absolute", marginLeft: "2.65%", marginTop: "10.5%", width: "23%", height: "40%" }}>
                                    <div className="FS_Button_Outer_Scientist" onMouseEnter={() => onEnterForAll(setScientistH)}>
                                        {scientistH && (<div className="FS_Button_Inner"
                                            onMouseLeave={() => setScientistH(false)}
                                            onClick={() => goToVideoPlayer()}
                                        ></div>)}
                                    </div>
                                    <div className="FS_Button_Outer_Ask" onMouseEnter={() => onEnterForAll(setAskH)}>
                                        {askH && (<div className="FS_Button_Inner"
                                            onMouseLeave={() => setAskH(false)}
                                            onClick={() => toggleEmail()}
                                        ></div>)}
                                    </div>
                                </div>
                            </div>
                        )}
                        {!showAsk && (
                            <div style={{ width: "100%", height: "100%" }}>
                                <div className="FS_Button_Outer_Back" onMouseEnter={() => onEnterForAll(setBackH)}>
                                    {backH && (<div className="FS_Button_Inner"
                                        onMouseLeave={() => setBackH(false)}
                                        onClick={() => toggleEmail()}
                                    ></div>)}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="FS_Info_Paperstack">
                        <h1>Ask a Scientist</h1>
                        {fsAskText}
                    </div>
                </div>
            )}
            {showVideoPlayer && (
                <FS_Video_Player backToVideoListFn={setShowVideoPlayer} YTid={ytId} />
            )}
        </div >
    );
}

function FS_About(props) {

    const [backH, setBackH] = useState(false);

    const fsAboutText = <p>The About page is a description of Frontier Scientists, and the people behind it. This page has short bios for the Frontier Scientists team, administators at the University of Alaska Fairbanks, and the ARSC staff. You can read this in full at the <a href="https://frontierscientists.com/about/">About Page</a> on the Frontier Scientists website.</p>

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div id="ios_about" className="iOS_App">
                <div style={{ position: "absolute", marginLeft: "2.6%", marginTop: "3.5%", width: "23.25%", height: "56%" }}>
                    <iframe src={"https://frontierscientists.com/about/"} width="100%" height="100%" />
                </div>
                <div className="FS_Button_Outer_Back_About" onMouseEnter={() => setBackH(true)}>
                    {backH && (<div className="FS_Button_Inner"
                        onMouseLeave={() => setBackH(false)}
                        onClick={() => props.changePageFn("Intro_Menu")}
                    ></div>)}
                </div>
            </div>
            <div className="FS_Info_Paperstack">
                <h1>About Frontier Scientists</h1>
                <p>
                    {fsAboutText}
                </p>
            </div>
        </div >
    );
}

function FS_Screen(props) {

    //const [currPage, setCurrPage] = useState("Intro_Menu");
    const [currPage, setCurrPage] = useState("Intro_Menu");

    const changePage = (newPage) => {
        setCurrPage(newPage);
    }

    switch (currPage) {
        case "Intro_Menu":
            return <FS_Intro changePageFn={changePage} />
            break;
        case "Research":
            return <FS_Research changePageFn={changePage} />
            break;
        case "Videos":
            return <FS_Videos changePageFn={changePage} />
            break;
        case "Map":
            return <FS_Map changePageFn={changePage} />
            break;
        case "Articles":
            return <FS_Articles changePageFn={changePage} />
            break;
        case "Ask":
            return <FS_Ask changePageFn={changePage} />
            break;
        case "About":
            return <FS_About changePageFn={changePage} />
            break;
        default:
            return <FS_Intro changePageFn={changePage} />
            break;
    }
}

function FS_App() {

    return (
        <div className="FS_App">
            <FS_Screen/>
        </div>
    );
}

export default FS_App;