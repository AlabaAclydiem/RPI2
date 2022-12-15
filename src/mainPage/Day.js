import React from "react"
import { Paper, Button, Box } from "@mui/material"
import { Container } from "@mui/system"
import { Image } from "mui-image"
import { Outlet, Link } from "react-router-dom"

import * as wData from "../data"

import "./style.css"

export default function Day() {

    const writer = Math.floor(Math.random() * 6)

    return (
        <Paper className="day" elevation={12} sx={{ bgcolor: "white" }}>
            <Container maxWidth="lg" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <Image src={wData.writerImages[writer]} alt="" easing="ease-in-out" duration={1100} width={300} height={400}/>
                <Container maxWidth="sm" sx={{ margin: 2, display: "flex", flexDirection: "column", justifyContent: "space-around",  alignItems: "center", textAlign: "center"}}>
                    <Container maxWidth="sm" sx={{ margin: 1, display: "flex", flexDirection: "column", textAlign: "center"}}>
                        <h1>{wData.localization.writerNames[writer]}</h1>
                        <h2>{wData.localization.writerYears[writer]}</h2>
                    </Container>
                    <h4>{wData.localization.writerInfo[writer]}</h4>
                    <Link className="_link" to={"/RPI2/writer/" + writer}><Box sx={{ maxWidth: 500, bgcolor: "white", borderRadius: 1, display: "flex", alignItems: "center"}}><Button variant="contained" sx={{ ':hover': {bgcolor: "white"}, bgcolor: "beige", color: "black", width: 350, borderRadius: 1, margin: 1 }}>{wData.localization.onWriterPage}</Button></Box></Link>
                </Container>
            </Container>
            <Outlet />
        </Paper>
    )
}