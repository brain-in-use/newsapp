import React, { Component } from 'react'
import NavBar from "./components/NavBar"
import NewsItems from "./components/NewsItems"
import LoadingBar from 'react-top-loading-bar'
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
      mode: 'light',
      progress: 0
    }
  }
  setProgress=(progress)=>{
    this.setState({progress: progress });
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
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes>
          <Route path="/general" element={<NewsItems key="general" mode={this.state.mode} pageSize={5} category="general" setProgress={this.setProgress}/>}/>
          <Route path="/business" element= {<NewsItems key="business" mode={this.state.mode} pageSize={5} category="business" setProgress={this.setProgress}/>}/>
          <Route path="/entertainment" element= {<NewsItems key="entertainments" mode={this.state.mode} pageSize={5} category="entertainments" setProgress={this.setProgress}/>}/>
          <Route path="/health" element= {<NewsItems key="health" mode={this.state.mode} pageSize={5} category="health" setProgress={this.setProgress}/>}/>
          <Route path="/science" element= {<NewsItems key="science" mode={this.state.mode} pageSize={5} category="science" setProgress={this.setProgress}/>}/>
          <Route path="/sports" element= {<NewsItems key="sports" mode={this.state.mode} pageSize={5} category="sports" setProgress={this.setProgress}/>}/>
          <Route path="/technology" element= {<NewsItems key="technology" mode={this.state.mode} pageSize={5} category="technology" setProgress={this.setProgress}/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

