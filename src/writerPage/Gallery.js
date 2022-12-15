import React from "react"
import { ImageListItem, ImageList, Paper } from "@mui/material"
import { Image } from "mui-image"

import * as wData from "../data"

import "./style.css"

export default function Gallery(props) {
    var elements = []
    for (let index = 0; index < wData.writerGallery[props.writer].length; index++) {
        elements.push(
            <ImageListItem sx={{ display: "flex" }} key={wData.writerGallery[props.writer][index]}>
                <Image src={wData.writerGallery[props.writer][index]} alt="" easing="ease-in-out" duration={1100} width={300} height={400}/>
            </ImageListItem>
        )
    }
    return (
        <Paper className="paper" elevation={12} sx={{ bgcolor: "white", marginBottom: 4, marginTop: 4 }}>
            <h2>{wData.localization.labelGallery}</h2>
            <ImageList sx={{ width: 800, height: 410, marginTop: 1 }} gap={15} rowHeight={400} cols={6} >{elements}</ImageList>   
        </Paper>
    )
}