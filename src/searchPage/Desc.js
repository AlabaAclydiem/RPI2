import React from "react"
import { Paper } from "@mui/material"

import * as wData from "../data"

import "./style.css"

export default function Desc() {
    return (
        <Paper className="description" elevation={12} sx={{ bgcolor: "white" }}>
            <h2>{wData.localization.searchDesc}</h2>
            <h4>{wData.localization.searchDescDetails1}<br />{wData.localization.searchDescDetails2}<br />{wData.localization.searchDescDetails3}</h4>
        </Paper>
    )
}