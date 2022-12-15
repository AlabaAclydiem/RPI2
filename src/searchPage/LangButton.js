import React from "react"
import { Button } from "@mui/material"

import * as wData from "../data"
import * as State from "../state"

import "./style.css"

export default function LangButton(props) {
    const handleClick = () => {
        State.switchLanguage()
        props.stateChange()
    }

    return (
        <div className="switch"><Button onClick={() => {handleClick()}} variant="contained" sx={{ ':hover': {bgcolor: "beige"}, bgcolor: "white", color: "black", flexBasis: 100, borderRadius: 1, margin: 1 }}>{wData.localization.langSwitch}</Button></div>
    )
}