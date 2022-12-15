import React from "react"
import { Tabs, Tab } from "@mui/material"
import { Box } from "@mui/system"
import { Outlet, Link } from "react-router-dom"

import * as wData from "../data"

import "./style.css"

export default function Nav() {
    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 3 }}>
            <Tabs value="">
                <Link className="_link" to="/RPI2/"><Tab index={0} label={wData.localization.tabToHome} /></Link>
                <Link className="_link" to="/RPI2/search/"><Tab index={1} label={wData.localization.tabToList} /></Link>
            </Tabs>
            <Outlet />
        </Box>
    )
} 