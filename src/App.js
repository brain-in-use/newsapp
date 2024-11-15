import React, { Component } from 'react'
import NavBar from "./components/NavBar"
import NewsItems from "./components/NewsItems"

export default class App extends Component {
  render() {
    return (
      <div style={{
        backgroundImage: "./background.webp",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}>
        <NavBar/>
        <NewsItems/>
      </div>
    )
  }
}

