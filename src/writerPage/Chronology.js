import React from "react"
import { Chrono } from "react-chrono"

import * as wData from "../data"
import * as State from "../state"

import "./style.css"

export default function Chronology() {
    const items = wData.localization.writerBio[State.curW]

    return (
        <div className="chrono-div">
            <Chrono items={items} cardWidth={600} useReadMode={true} mode="VERTICAL" lineWidth={4} allowDynamicUpdate={true} theme={{primary: "black", secondary: "black", titleColorActive: "beige", cardBgColor: "white"}}/>
        </div>
    )
}