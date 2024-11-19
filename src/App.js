import React, { Component } from 'react'
import NavBar from "./components/NavBar"
import NewsItems from "./components/NewsItems"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode: 'light'
    }
  }

  toggleMode = ()=>{
    this.setState((prevState) => {
      const newMode = prevState.mode === 'light' ? 'dark' : 'light';
      // Update the body style based on the new mode
      document.body.style.backgroundColor = newMode === 'dark' ? '#08072ac2' : 'white';
      document.body.style.color = newMode === 'dark' ? 'white' : 'black';
      return { mode: newMode };
    });
  }
  

  render() {
    
    return (
      <div>
        <Router>
        <NavBar mode={this.state.mode} toggleMode={this.toggleMode}/>
        
        <Routes>
          <Route path="/general" element={<NewsItems key="general" pageSize={5} category="general"/>}/>
          <Route path="/business" element= {<NewsItems key="business" pageSize={5} category="business"/>}/>
          <Route path="/entertainment" element= {<NewsItems key="entertainments" pageSize={5} category="entertainments"/>}/>
          <Route path="/health" element= {<NewsItems key="health" pageSize={5} category="health"/>}/>
          <Route path="/science" element= {<NewsItems key="science" pageSize={5} category="science"/>}/>
          <Route path="/sports" element= {<NewsItems key="sports" pageSize={5} category="sports"/>}/>
          <Route path="/technology" element= {<NewsItems key="technology" pageSize={5} category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

