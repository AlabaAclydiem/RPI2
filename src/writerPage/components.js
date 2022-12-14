import React from "react"
import { Tabs, Tab, ImageListItem, ImageList, Paper, Button } from "@mui/material"
import { Box, Container } from "@mui/system"
import { Image } from "mui-image"
import { Chrono } from "react-chrono"
import YouTube from "react-youtube"
import { Map, Marker } from "pigeon-maps"

import * as wData from "../data"
import * as State from "../state"

import "./style.css"

export function LangButton(props) {
    const handleClick = () => {
        State.switchLanguage()
        props.stateChange()
    }

    return (
        <div className="switch"><Button onClick={() => {handleClick()}} variant="contained" sx={{ ':hover': {bgcolor: "beige"}, bgcolor: "white", color: "black", flexBasis: 100, borderRadius: 1, margin: 1 }}>{wData.localization.langSwitch}</Button></div>
    )
}

export function Nav(props) {
    const handleChange = (event, value) => {
        if (State.curP !== value) {
            State.setPage(value);
            if (value === 0) State.randWNum()
        }
        props.stateChange()
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 3 }}>
            <Tabs value="" onChange={handleChange}>
                <Tab index={0} label={wData.localization.tabToHome} />
                <Tab index={1} label={wData.localization.tabToList} />
            </Tabs>
        </Box>
    )
} 

export function Intro() {
    return (
        <Paper className="paper" elevation={12} sx={{ display: "flex", bgcolor: "white", marginBottom: 3}}>
            <Container maxWidth="sm" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <Image src={wData.writerImages[State.curW]} alt="" easing="ease-in-out" duration={1100} width={300} height={400}/>
                <Container maxWidth="sm" sx={{ margin: 2, display: "flex", flexDirection: "column", justifyContent: "space-around",  alignItems: "center", textAlign: "center"}}>
                        <h1>{wData.localization.writerNames[State.curW]}</h1>
                        <h2>{wData.localization.writerYears[State.curW]}</h2>
                </Container>
            </Container>
        </Paper>
    )
}

export function Chronology() {
    const items = wData.localization.writerBio[State.curW]

    return (
        <div className="chrono-div">
            <Chrono items={items} cardWidth={600} useReadMode={true} mode="VERTICAL" lineWidth={4} allowDynamicUpdate={true} theme={{primary: "black", secondary: "black", titleColorActive: "beige", cardBgColor: "white"}}/>
        </div>
    )
}

export function Gallery() {
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

export class Video extends React.Component {
    render() {
        const opts = {
            height: '400',
            width: '700',
            playerVars: {
              autoplay: 1,
            },
          };

          return (
            <Paper className="paper" elevation={12} sx={{ bgcolor: "white", marginBottom: 4, marginTop: 2 }}>
                <h2>{wData.localization.labelVideo}</h2>
                <YouTube className="youtube" videoId={wData.writerVideo[State.curW]} opts={opts} onReady={this._onReady} />;
            </Paper>
          )
        }

    _onReady(event) {
        event.target.pauseVideo();
    }
}

export function Dot() {
    return (
        <Paper className="paper" elevation={12} sx={{ bgcolor: "white", marginBottom: 3, marginTop: 2 }}>
            <h2 class="map-text">{wData.localization.labelDot}</h2>
            <Map height={600} width={800} defaultCenter={wData.writerDot[State.curW]} defaultZoom={17}>
                <Marker width={50} anchor={wData.writerDot[State.curW]} />
            </Map>
        </Paper>
    )
}