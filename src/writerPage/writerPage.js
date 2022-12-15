import React from "react"

import LangButton from "./LangButton"
import Nav from "./Nav"
import Intro from "./Intro"
import Chronology from "./Chronology"
import Gallery from "./Gallery"
import Video from "./Video"
import Dot from "./Dot"

import "./style.css"
import { useParams } from "react-router-dom"

export default function WriterPage(props) {
    let { id } = useParams()
    return (
        <div class="writer-page">
            <LangButton stateChange={props.stateChange} language={props.language}/>
            <Nav />
            <Intro writer={id}/>
            <Chronology writer={id}/>
            <Gallery writer={id}/>
            <Video writer={id}/>
            <Dot writer={id}/>
        </div>
    )
}