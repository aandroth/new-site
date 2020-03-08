import React, { useState, useRef } from 'react';

function SketchPad() {

    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    let partyMarkerColor = 'rgb(0,0,0)';
    let partyMarkerIsActive = false;
    let partyMarkerColoring = false;
    let currRed = 0;
    let currGrn = 0;
    let currBlu = 0;
    let drawActive = false;
    let prevX = 0;
    let prevY = 0;

    const colorSelect = (colorSelected) => {

        partyMarkerColor = 'rgb(' + currRed + ', ' + currGrn + ', ' + currBlu + ')';

        if (colorSelected === "red") {
            currRed = 255;
            currGrn = 0;
            currBlu = 0;
        }
        else if (colorSelected === "grn") {
            currRed = 0;
            currGrn = 255;
            currBlu = 0;
        }
        else if (colorSelected === "blu") {
            currRed = 0;
            currGrn = 0;
            currBlu = 255;
        }
        else if (colorSelected === "blk") {
            currRed = 0;
            currGrn = 0;
            currBlu = 0;
        }
        else /* colorSelected === "wht"*/ {
            currRed = 255;
            currGrn = 255;
            currBlu = 255;
        }
    }

    const drawSquare = (event) => {

        let cnv = canvasRef.current;
        if (ctx === null) {
            console.log("ctx didn't exist");
            cnv.style.width = '100%';
            cnv.style.height = '100%';
            cnv.width = cnv.offsetWidth;
            cnv.height = cnv.offsetHeight;
            setCtx(cnv.getContext("2d"));
        }

        if (ctx && drawActive) {
            console.log("drawActive is active");

            var rect = cnv.getBoundingClientRect();

            // Get the distance x and y from one point to the other
            let distX = event.clientX - prevX;
            let distY = event.clientY - prevY;

            // Find out how many squares to put down
            // Base this on the distance between the two points, starting and ending
            let drawCount = Math.ceil(Math.sqrt((distX) * (distX) + (distY) * (distY)) / 5.0);

            if (partyMarkerIsActive) {
                if (partyMarkerColoring) {
                    partyMarkerColoring = false;
                    ctx.fillStyle = partyMarkerColor;
                }
                else {
                    partyMarkerColoring = true;
                    ctx.fillStyle = "rgb(" + currRed + "," + currGrn + "," + currBlu + ")";
                }
            }
            else {
                ctx.fillStyle = "rgb(" + currRed + "," + currGrn + "," + currBlu + ")";
            }


            let incrX = distX / drawCount;
            let incrY = distY / drawCount;

            // for loop, put down a square based on the number of squares put down so far
            for (let ii = 0; ii < drawCount; ++ii) {
                let pointX = prevX + (incrX * ii);
                let pointY = prevY + (incrY * ii);
                ctx.fillRect((pointX - rect.left - 10), (pointY - rect.top - 10), 20, 20);
            }
            prevX = event.clientX;
            prevY = event.clientY;
        }
    }

    const activateDraw = (event) => {
            drawActive = true;
            prevX = event.clientX;
            prevY = event.clientY;
        if (ctx && drawActive) {
            let cnv = canvasRef.current;
            var rect = cnv.getBoundingClientRect();
            ctx.fillStyle = "rgb(" + currRed + "," + currGrn + "," + currBlu + ")";
            ctx.fillRect((event.clientX - rect.left - 10), (event.clientY - rect.top - 10), 20, 20);
        }
    }

    const deactivateDraw = () => {
        drawActive = false;
    }

    const partyMarkerToggle = () => {
        partyMarkerIsActive = !partyMarkerIsActive;
    }

    return (
        <div className="SketchDesk" onMouseUp={() => deactivateDraw()}>
            <div className="SketchPad">
                <div className="SketchPad_Canvas" onMouseMove={(event) => drawSquare(event)} onMouseDown={(event) => activateDraw(event)}>
                    <canvas ref={canvasRef}>
                        You need to upgrade your browser to one that supports the HTML canvas!
                    </canvas> 
                </div>
            </div>
            <div id="Color0" className="ColorBlock" onMouseUp={() => colorSelect('red')}>
            </div>
            <div id="Color1" className="ColorBlock" onMouseUp={() => colorSelect('grn')}>
            </div>
            <div id="Color2" className="ColorBlock" onMouseUp={() => colorSelect('blu')}>
            </div>
            <div id="Color3" className="ColorBlock" onMouseUp={() => colorSelect('blk')}>
            </div>
            <div id="Color4" className="ColorBlock" onMouseUp={() => colorSelect('wht')}>
            </div>
            <div className="ColorBlock" onMouseUp={() => partyMarkerToggle()} style={{ backgroundColor: "grey" }}>
            </div>
        </div>
    );
}
export default SketchPad;