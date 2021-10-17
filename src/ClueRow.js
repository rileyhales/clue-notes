import React from "react"

import MarkerBox from "./MarkerBox";

import "./ClueRow.css"

const ClueRow = (props) => {
    return (
        <div className={"clue-row"}>
            <div className={"clue-label"}>{props.name}</div>
            <div className={"box-container"}>
                <MarkerBox/>
                <MarkerBox/>
                <MarkerBox/>
                <MarkerBox/>
                <MarkerBox/>
                <MarkerBox/>
            </div>
        </div>
    )
}

export default ClueRow