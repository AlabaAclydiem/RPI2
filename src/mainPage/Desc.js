import React from "react"
import { Paper } from "@mui/material"

import * as wData from "../data"

import "./style.css"

export default function Desc() {
    return (
        <Paper className="description" elevation={12} sx={{ bgcolor: "white" }}>    
            <h2>{wData.localization.mainDesc}</h2>
            <h4>{wData.localization.mainDescDetails1}<br />{wData.localization.mainDescDetails2}</h4>
        </Paper>
    )
}