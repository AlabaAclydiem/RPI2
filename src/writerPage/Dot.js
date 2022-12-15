import React from "react"
import { Paper } from "@mui/material"
import { Map, Marker } from "pigeon-maps"

import * as wData from "../data"
import * as State from "../state"

import "./style.css"

export default function Dot() {
    return (
        <Paper className="paper" elevation={12} sx={{ bgcolor: "white", marginBottom: 3, marginTop: 2 }}>
            <h2 class="map-text">{wData.localization.labelDot}</h2>
            <Map height={600} width={800} defaultCenter={wData.writerDot[State.curW]} defaultZoom={17}>
                <Marker width={50} anchor={wData.writerDot[State.curW]} />
            </Map>
        </Paper>
    )
}