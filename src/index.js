import React from "react"
import * as ReactDOMClient from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainPage from "./mainPage/mainPage"
import SearchPage from "./searchPage/searchPage"
import WriterPage from "./writerPage/writerPage"

import * as wData from "./data"

import "./style.css"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: "ru"
    }

    this.stateChange = (value) => {
      this.setState({currentLanguage: value})
      wData.localization.setLanguage(value)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/RPI2/" element={<MainPage stateChange={this.stateChange} language={this.state.currentLanguage} />} />
          <Route path="/RPI2/search/" element={<SearchPage stateChange={this.stateChange} language={this.state.currentLanguage} />} />
          <Route path="/RPI2/writer/:id" element={<WriterPage stateChange={this.stateChange} language={this.state.currentLanguage} />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

const app = ReactDOMClient.createRoot(document.getElementById("current-page"))

app.render(
  <React.StrictMode>
    <div className="general">
      <App />
    </div>    
  </React.StrictMode>)