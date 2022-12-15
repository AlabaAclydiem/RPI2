import React from "react"
import { Button } from "@mui/material"

import * as wData from "../data"

import "./style.css"

export default function LangButton(props) {
    const handleClick = () => {
        var curL
        if (props.language === "ru") {
            curL = "en"
        } else {
            curL = "ru"
        }
        props.stateChange(curL)
    }

    return (
        <div className="switch"><Button onClick={() => {handleClick()}} variant="contained" sx={{ ':hover': {bgcolor: "beige"}, bgcolor: "white", color: "black", flexBasis: 100, borderRadius: 1, margin: 1 }}>{wData.localization.langSwitch}</Button></div>
    )
}