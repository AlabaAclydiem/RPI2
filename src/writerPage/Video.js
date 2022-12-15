import React from "react"
import { Paper } from "@mui/material"
import YouTube from "react-youtube"

import * as wData from "../data"
import * as State from "../state"

import "./style.css"

export default class Video extends React.Component {
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
                <YouTube className="youtube" videoId={wData.writerVideo[State.curW]} opts={opts} onReady={this._onReady} />
            </Paper>
          )
        }

    _onReady(event) {
        event.target.pauseVideo();
    }
}