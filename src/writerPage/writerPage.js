import React from "react"

import { Nav, Intro, Chronology, Gallery, Video, Dot, LangButton } from "./components"

import "./style.css"

export default function WriterPage(props) {
    return (
        <div class="writer-page">
            <LangButton stateChange={props.stateChange}/>
            <Nav stateChange={props.stateChange} />
            <Intro />
            <Chronology />
            <Gallery />
            <Video />
            <Dot />
        </div>
    )
}