import React, { useState } from "react"
import { Paper, TextField, Button } from "@mui/material"
import { Box } from "@mui/system"
import { Outlet, Link } from "react-router-dom"

import * as wData from "../data"

import "./style.css"

export default function Search() {
    const [template, setTemplate] = useState("")
    var element = []
    for (let index = 0; index < wData.localization.writerNames.length; index++) {
        if (template === "" || wData.localization.writerNames[index].toLowerCase().indexOf(template.toLowerCase()) !== -1) {
            element.push(<Link className="_link" to={"/RPI2/writer/" + index}><Button variant="contained" sx={{ ':hover': {bgcolor: "white"}, bgcolor: "beige", color: "black", flexBasis: 500, borderRadius: 1, margin: 1 }}>{wData.localization.writerNames[index]}</Button></Link>)
        }
    }

    return (
        <Paper sx={{ bgcolor: "white",  borderRadius: 1, padding: 2, display: "flex", flexDirection: "column", alignItems: "center", width: "fit-content"}} elevation={12}>
            <TextField sx={{ ':hover': {bgcolor: "white"}, margin: 2 }} value={template} onChange={(event) => {setTemplate(event.target.value)}} placeholder={wData.localization.searchPlaceholder} label={wData.localization.searchLabel} variant="outlined"/>
            <Box sx={{ maxWidth: 500, flexDirection: "column", bgcolor: "white", borderRadius: 1, display: "flex", alignItems: "center"}}>{element}</Box>
            <Outlet />
        </Paper>
    )
}