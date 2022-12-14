import React from "react"

import { Nav, Desc, Day, DevTeam, LangButton } from "./сomponents"

import "./style.css"

export default function MainPage(props) {
    return (
        <div className="main-page">
            <LangButton stateChange={props.stateChange}/>
            <Nav stateChange={props.stateChange} />
            <Desc />
            <Day stateChange={props.stateChange} /> 
            <DevTeam />
        </div>
    )
}