import React from "react"

import Marker from "./Marker";

import "./Row.css"

const Row = (props) => {
    return (
        <div className={"row-element"}>
            <div className={"row-label"}>{props.name}</div>
            <div className={"row-content"}>
                {Array(props.numPlay).fill(true).map(_ => <Marker/>)}
            </div>
        </div>
    )
}

export default Row