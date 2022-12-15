import React from "react"
import { Paper } from "@mui/material"
import { Container } from "@mui/system"
import { Image } from "mui-image"

import * as wData from "../data"

import "./style.css"

export default function Intro(props) {
    console.log(props.writer)
    return (
        <Paper className="paper" elevation={12} sx={{ display: "flex", bgcolor: "white", marginBottom: 3}}>
            <Container maxWidth="sm" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <Image src={wData.writerImages[props.writer]} alt="" easing="ease-in-out" duration={1100} width={300} height={400}/>
                <Container maxWidth="sm" sx={{ margin: 2, display: "flex", flexDirection: "column", justifyContent: "space-around",  alignItems: "center", textAlign: "center"}}>
                        <h1>{wData.localization.writerNames[props.writer]}</h1>
                        <h2>{wData.localization.writerYears[props.writer]}</h2>
                </Container>
            </Container>
        </Paper>
    )
}