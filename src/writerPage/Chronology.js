import React from "react"
import { Chrono } from "react-chrono"

import * as wData from "../data"

import "./style.css"

export default function Chronology(props) {
    const items = wData.localization.writerBio[props.writer]

    return (
        <div className="chrono-div">
            <Chrono items={items} cardWidth={600} useReadMode={true} mode="VERTICAL" lineWidth={4} allowDynamicUpdate={true} theme={{primary: "black", secondary: "black", titleColorActive: "beige", cardBgColor: "white"}}/>
        </div>
    )
}