import React from "react"
import * as ReactDOMClient from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainPage from "./mainPage/mainPage"
import SearchPage from "./searchPage/searchPage"
import WriterPage from "./writerPage/writerPage"

import "./style.css"
import * as State from "./state"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: "ru"
    }

    this.stateChange = () => {
      this.setState({currentLanguage: State.curL})
    }

  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage stateChange={this.stateChange} />} />
          <Route path="/search" element={<SearchPage stateChange={this.stateChange} />} />
          <Route path="/writer" element={<WriterPage stateChange={this.stateChange} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

const app = ReactDOMClient.createRoot(document.getElementById("current-page"))

app.render(
  <React.StrictMode>
    <div className="general">
      <App />
    </div>    
  </React.StrictMode>)