import React from "react"

import ClueRow from "./ClueRow";

import './App.css';

function App() {
    const suspectList = [
        "Colonel Mustard",
        "Professor Plum",
        "Mr Green",
        "Mrs Peacock",
        "Miss Scarlet",
        "Mrs White"
    ]
    const weaponList = [
        "Knife",
        "Candlestick",
        "Revolver",
        "Rope",
        "Lead Pipe",
        "Wrench"
    ]
    const roomList = [
        "Hall",
        "Lounge",
        "Dining Room",
        "Kitchen",
        "Ballroom",
        "Conservatory",
        "Billiard Room",
        "Library",
        "Study"
    ]

    return (
        <div className="app-container">
            {suspectList.map((suspect, idx) => <ClueRow key={idx} name={suspect}/>)}
            <hr/>
            {weaponList.map((weapon, idx) => <ClueRow key={idx} name={weapon}/>)}
            <hr/>
            {roomList.map((room, idx) => <ClueRow key={idx} name={room}/>)}
        </div>
    );
}

export default App;
