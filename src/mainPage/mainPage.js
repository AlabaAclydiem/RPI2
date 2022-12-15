import React from "react"

import LangButton from "./LangButton"
import Nav from "./Nav"
import Desc from "./Desc"
import Day from "./Day"
import DevTeam from "./DevTeam"

import "./style.css"

export default function MainPage(props) {
    return (
        <div className="main-page">
            <LangButton stateChange={props.stateChange} language={props.language}/>
            <Nav />
            <Desc />
            <Day /> 
            <DevTeam />
        </div>
    )
}   