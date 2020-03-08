import React from 'react';
import CheckersBoard from './Images/Checker_Board.png'
import paperStack from './Images/Paper_Stack_Tall.png'

function Checkers_Info() {

    const checkersInfoText = <p> An Artificial Intelligence that could play the classic game of Checkers was the goal of my Introduction to Artificial Intelligence class. The way we created our AIs was by creating neural networks, which consisted of many layers of nodes. The nodes in these layers began as just random weights that would multiply against any input they were given. At first their moves were very much random and inept, but by having the winners copied with minor random tweaks to their node wieghts, the ones with better and better weights would eventually win out, reproduce, and randomly produce better and better Checkers players. This is called an evolutionary model, and one that I find fascinating at the possibilities of what they can do. See the code on <a href="https://github.com/aandroth/Checkers_AI"> Github!</a></p>

    return (
        <div className="Checkers_Page">
            <img src={CheckersBoard} alt="Checkerboard" style={{ float: "left" }} />
            <div className="Checkers_Info_Paperstack">
                <h1>
                    Checkers Playing Neural Network
                </h1>
                <p>
                    {checkersInfoText}
                </p>
            </div>
        </div>
    );
}
export default Checkers_Info;