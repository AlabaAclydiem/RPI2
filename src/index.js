import React from "react"
import * as ReactDOMClient from "react-dom/client"

import MainPage from "./mainPage/mainPage"
import SearchPage from "./searchPage/searchPage"
import WriterPage from "./writerPage/writerPage"

import "./style.css"
import * as State from "./state"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPageNumber: 0,
      currentLanguage: "ru"
    }

    this.stateChange = () => {
      this.setState({currentPageNumber: State.curP, currentLanguage: State.curL})
    }

  }

  render() {
    switch(this.state.currentPageNumber) {
      case 1:
        return <SearchPage stateChange={this.stateChange} />
      case 2:
        return <WriterPage stateChange={this.stateChange} />
      case 0:
      default:
          return <MainPage stateChange={this.stateChange} />
    }
  }
}

const app = ReactDOMClient.createRoot(document.getElementById("current-page"))

app.render(
  <React.StrictMode>
    <div className="general">
      <App />
    </div>    
  </React.StrictMode>)