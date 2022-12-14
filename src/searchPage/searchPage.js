import React from "react"

import { Nav, Desc, Search, LangButton } from "./components"

import "./style.css"

export default function SearchPage(props) {
    return (
        <div className="search-page">
            <LangButton stateChange={props.stateChange}/>
            <Nav stateChange={props.stateChange} /* curPage={props.curPage} clickBtn={props.clickBtn} *//>
            <Desc />
            <Search stateChange={props.stateChange} />
        </div>
    )
}