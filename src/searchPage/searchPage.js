import React from "react"

import LangButton from "./LangButton"
import Nav from "./Nav"
import Desc from "./Desc"
import Search from "./Search"

import "./style.css"

export default function SearchPage(props) {
    return (
        <div className="search-page">
            <LangButton stateChange={props.stateChange}/>
            <Nav />
            <Desc />
            <Search />
        </div>
    )
}