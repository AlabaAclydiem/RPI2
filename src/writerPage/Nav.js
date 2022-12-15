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
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 3 }}>
            <Tabs value="" onChange={handleChange}>
                <Tab index={0} label={wData.localization.tabToHome} />
                <Tab index={1} label={wData.localization.tabToList} />
            </Tabs>
        </Box>
    )
} 