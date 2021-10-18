import React, {useState} from "react"

import "./Marker.css"

const Marker = () => {
    const [checkState, setCheckState] = useState("");
    const onClickFunction = () => {
        setCheckState(currentCheckState => {
            switch (currentCheckState) {
                case "":
                    return "?"
                case "?":
                    return "X"
                case "X":
                    return "O"
                case "O":
                    return "N"
                case "N":
                    return "Y"
                case "Y":
                    return "\u2713"
                default:
                    return ""
            }
        })

    }
    return <div className={"marker-box"} onClick={onClickFunction}>{checkState}</div>
}

export default Marker