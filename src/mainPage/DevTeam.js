import React from "react"
import { Paper, Avatar, Stack } from "@mui/material"

import * as wData from "../data"
import ya from "../avatars/YankovaAvatar.jpg"
import sa from "../avatars/ScripskayaAvatar.jpg"
import pk from "../avatars/PastukhouAvatar.jpg"

import "./style.css"

export default function DevTeam() {
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