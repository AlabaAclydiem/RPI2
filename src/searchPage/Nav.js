import React from "react"
import { Tabs, Tab } from "@mui/material"
import { Box } from "@mui/system"

import * as wData from "../data"
import * as State from "../state"

import "./style.css"

export default function Nav(props) {
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