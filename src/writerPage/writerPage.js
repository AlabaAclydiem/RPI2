import React from "react"

import LangButton from "./LangButton"
import Nav from "./Nav"
import Intro from "./Intro"
import Chronology from "./Chronology"
import Gallery from "./Gallery"
import Video from "./Video"
import Dot from "./Dot"

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