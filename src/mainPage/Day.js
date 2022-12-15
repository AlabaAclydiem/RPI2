import React from "react"
import { Paper, Button } from "@mui/material"
import { Container } from "@mui/system"
import { Image } from "mui-image"

import * as wData from "../data"
import * as State from "../state"

import "./style.css"

export default function Day(props) {
    const handleClick = (value) => {
        State.setWNum(value)
        State.setPage(2)
        props.stateChange()
    }

    return (
        <Paper className="day" elevation={12} sx={{ bgcolor: "white" }}>
            <Container maxWidth="lg" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <Image src={wData.writerImages[State.curW]} alt="" easing="ease-in-out" duration={1100} width={300} height={400}/>
                <Container maxWidth="sm" sx={{ margin: 2, display: "flex", flexDirection: "column", justifyContent: "space-around",  alignItems: "center", textAlign: "center"}}>
                    <Container maxWidth="sm" sx={{ margin: 1, display: "flex", flexDirection: "column", textAlign: "center"}}>
                        <h1>{wData.localization.writerNames[State.curW]}</h1>
                        <h2>{wData.localization.writerYears[State.curW]}</h2>
                    </Container>
                    <h4>{wData.localization.writerInfo[State.curW]}</h4>
                    <Container maxWidth="lg" sx={{ margin: 3, display: "flex", justifyContent: "center"}}><Button onClick={() => {handleClick(State.curW)}} variant="contained" sx={{ ':hover': {bgcolor: "white"}, bgcolor: "beige", color: "black", flexBasis: 500, borderRadius: 1, margin: 1 }}>{wData.localization.onWriterPage}</Button></Container>
                </Container>
            </Container>
        </Paper>
    )
}