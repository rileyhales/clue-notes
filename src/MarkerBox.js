import React, {useState} from "react"

import "./MarkerBox.css"

const MarkerBox = (props) => {
    const [checkState, setCheckState] = useState("");
    const onClickFunction = (evt) => {
        setCheckState(currentCheckState => {
            switch (currentCheckState) {
                case "":
                    return "X"
                case "X":
                    return "?"
                case "?":
                    return "O"
                case "O":
                    return ""
                default:
                    return ""
            }
        })

    }
    return <div className={"marker-box"} onClick={onClickFunction}>{checkState}</div>
}

export default MarkerBox