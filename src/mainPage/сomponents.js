import React from "react"
import { Tabs, Tab, Paper, Avatar, Stack, Button } from "@mui/material"
import { Box, Container } from "@mui/system"
import { Image } from "mui-image"

import * as wData from "../data"
import * as State from "../state"
import ya from "../avatars/YankovaAvatar.jpg"
import sa from "../avatars/ScripskayaAvatar.jpg"
import pk from "../avatars/PastukhouAvatar.jpg"

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
            <h2>{wData.localization.mainDesc}</h2>
            <h4>{wData.localization.mainDescDetails1}<br />{wData.localization.mainDescDetails2}</h4>
        </Paper>
    )
}

export function Day(props) {
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

export function DevTeam() {
    return (
        <Paper className="dev" elevation={12} sx={{ bgcolor: "white" }}>
            <Stack className="avatar" direction="row" spacing={3}>
                <Avatar alt="Янкова Анастасия" src={ya} sx={{ width: 80, height: 80 }} />
                <Avatar alt="Скрипская Антонина" src={sa} sx={{ width: 80, height: 80 }} />
                <Avatar alt="Пастухов Кирилл" src={pk} sx={{ width: 80, height: 80 }} />
            </Stack>
            <Stack direction="row" spacing={3}>
                <a className="link" href="https://github.com/dumonten">{wData.localization.surName1}<br />{wData.localization.name1}<br /><i>(dumonten)</i></a>
                <a className="link" href="https://github.com/Skripskaya">{wData.localization.surName2}<br />{wData.localization.name2}<br /><i>(Skripskaya)</i></a>
                <a className="link" href="https://github.com/AlabaAclydiem">{wData.localization.surName3}<br />{wData.localization.name3}<br /><i>(AlabaAclydiem)</i></a>
            </Stack>
        </Paper>
    )
}