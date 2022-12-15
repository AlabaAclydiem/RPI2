import React from "react"
import { ImageListItem, ImageList, Paper } from "@mui/material"
import { Image } from "mui-image"

import * as wData from "../data"
import * as State from "../state"

import "./style.css"

export default function Gallery() {
    var elements = []
    for (let index = 0; index < wData.writerGallery[State.curW].length; index++) {
        elements.push(
            <ImageListItem sx={{ display: "flex" }} key={wData.writerGallery[State.curW][index]}>
                <Image src={wData.writerGallery[State.curW][index]} alt="" easing="ease-in-out" duration={1100} width={300} height={400}/>
            </ImageListItem>
        )
    }
    return (
        <Paper className="paper" elevation={12} sx={{ bgcolor: "white", marginBottom: 4, marginTop: 4 }}>
            <h2>{wData.localization.labelGallery}</h2>
            <ImageList sx={{ width: 800, height: 410, marginTop: 1 }} gap={15} rowHeight={400} cols={State.wCnt} >{elements}</ImageList>   
        </Paper>
    )
}