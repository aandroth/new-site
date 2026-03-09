import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./HireMe.css";

function Masktego() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build_Masktego/Build_Web.loader.js",
        dataUrl: "Build_Masktego/Build_Web.data",
        frameworkUrl: "Build_Masktego/Build_Web.framework.js",
        codeUrl: "Build_Masktego/Build_Web.wasm",
    });

    return <Unity unityProvider={unityProvider} style={{ width: "100vw", height: "101vh" }} />;
}


function MasktegoMain() {

    const { unityProvider } = useUnityContext({
        loaderUrl: "Build_Masktego/Build_Web.loader.js",
        dataUrl: "Build_Masktego/Build_Web.data",
        frameworkUrl: "Build_Masktego/Build_Web.framework.js",
        codeUrl: "Build_Masktego/Build_Web.wasm",
    });

    return (
        <div className="Combo_Col" style={{ width: "100vw", height: "80vh" }} >
            <div style={{ position: "absolute", left: "5vw", top: "3vw", width: "90vw", height: "90vh" }} >
                <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
            </div>
        </div>
    );
}

export default MasktegoMain;