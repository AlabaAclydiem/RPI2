import React, { useState } from "react"
import { Tabs, Tab, Paper, TextField, Button } from "@mui/material"
import { Box } from "@mui/system"

import * as wData from "../data"
import * as State from "../state"

import "./style.css"

export function LangButton(props) {
    const handleClick = () => {
        State.switchLanguage()
        props.stateChange()
    }

    return (
        <div className="switch"><Button onClick={() => {handleClick()}} variant="contained" sx={{ ':hover': {bgcolor: "beige"}, bgcolor: "white", color: "black", flexBasis: 100, borderRadius: 1, margin: 1 }}>{wData.localization.langSwitch}</Button></div>
    )
}

export function Nav(props) {
    const handleChange = (event, value) => {
        if (State.curP !== value) {
            State.setPage(value);
            if (value === 0) State.randWNum()
        }
        props.stateChange()
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={State.curP} onChange={handleChange}>
                <Tab index={0} label={wData.localization.tabHome} />
                <Tab index={1} label={wData.localization.tabList} />
            </Tabs>
        </Box>
    )
} 

export function Desc() {
    return (
        <Paper className="description" elevation={12} sx={{ bgcolor: "white" }}>
            <h2>{wData.localization.searchDesc}</h2>
            <h4>{wData.localization.searchDescDetails1}<br />{wData.localization.searchDescDetails2}<br />{wData.localization.searchDescDetails3}</h4>
        </Paper>
    )
}


export function Search(props) {
    const handleClick = (value) => {
        State.setWNum(value)
        State.setPage(2)
        props.stateChange()
    }

    const [template, setTemplate] = useState("")
    var element = []
    for (let index = 0; index < wData.localization.writerNames.length; index++) {
        if (template === "" || wData.localization.writerNames[index].toLowerCase().indexOf(template.toLowerCase()) !== -1) {
            element.push(<Button onClick={() => {handleClick(index)}} variant="contained" sx={{ ':hover': {bgcolor: "white"}, bgcolor: "beige", color: "black", flexBasis: 500, borderRadius: 1, margin: 1 }}>{wData.localization.writerNames[index]}</Button>)
        }
    }

    return (
        <Paper sx={{ bgcolor: "white",  borderRadius: 1, padding: 2, display: "flex", flexDirection: "column", alignItems: "center", width: "fit-content"}} elevation={12}>
            <TextField sx={{ ':hover': {bgcolor: "white"}, margin: 2 }} value={template} onChange={(event) => {setTemplate(event.target.value)}} placeholder={wData.localization.searchPlaceholder} label={wData.localization.searchLabel} variant="outlined"/>
            <Box sx={{ maxWidth: 500, flexWrap: "wrap", bgcolor: "white", borderRadius: 1, display: "flex", alignItems: "center"}}>{element}</Box>
        </Paper>
    )
}


