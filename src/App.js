import React, {useState} from "react"

import Row from "./Row";

import './App.css';

function App() {
    const suspectList = [
        "Col Mustard",
        "Prof Plum",
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
    const [numPlay, setNumPlay] = useState(6)
    // useEffect(() => {
    //     setNumPlay(Number(prompt("Enter Number of Players")))
    // }, [])

    return (
        <div>
            <nav>Clue Notepad</nav>
            <div className={"notepad-wrapper"}>
                {suspectList.map((s, idx) => <Row key={idx} name={s} numPlay={numPlay}/>)}
                <hr/>
                {weaponList.map((w, idx) => <Row key={idx} name={w} numPlay={numPlay}/>)}
                <hr/>
                {roomList.map((r, idx) => <Row key={idx} name={r} numPlay={numPlay}/>)}
            </div>
        </div>
    );
}

export default App;
