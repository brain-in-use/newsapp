import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";
export class NavBar extends Component {

  static defaultProps={
    mode: 'light',
    toggleMode: null
  }

  static propTypes={
    mode: PropTypes.string,
    toggleMode: PropTypes.func
      
    
  }

  render() {
    // let {mode,toggleMode}=this.props;
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={this.props.mode}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">SWIFT NEWS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
            {/* <SearchForm/> */}
            <div className="form-check form-switch mx-3">
        <input className="form-check-input" onClick={this.props.toggleMode}  type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"style={{color: this.props.mode==='light'? 'black':'white'}}>{this.props.mode.charAt(0).toUpperCase()+this.props.mode.substring(1)} Mode</label>
      </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
