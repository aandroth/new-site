import React, { useState } from 'react'

var cards = [ 
    "0: Make site run function one second after refresh",
    "1: Make site save data when a variable changes",
    "2: Make site update count at the top",
    "3: Make site check value of field when a value changes"
]

var activeCards = [0, 1, 2, 3];

function chooseCard() {

    var returnValue = "";
    var returnNumber = 0;

    if (activeCards.length > 0) {
        var cardChosen = Math.floor(Math.random() * activeCards.length);
        returnValue = cards[activeCards[cardChosen]];
        activeCards.splice(cardChosen, 1);

        if (activeCards.length <= 0) {
            resetActiveCards();
        }
    } else {
        resetActiveCards();
    }
    return returnValue;
}

function resetActiveCards() {
    activeCards = [0, 1, 2, 3];
}

function PracticeCards() {

    const [card, setCard] = useState("");

    return (
        <div>
            <button style={{ width: '100px', height: '100px' }} onClick={() => setCard(chooseCard)}>Choose Card</button>
            <div className="Pokemon_Info_Paperstack">
                <p>
                    {card}
                </p>
            </div>
            <div className="Pokemon_Info_Paperstack">
                <p>
                    {activeCards}
                </p>
            </div>
        </div>
    );
}

export default PracticeCards;
