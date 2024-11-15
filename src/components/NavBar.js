import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={"light"}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NEWS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" hreff="/">Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" hreff="/about"> About</a>
              </li>
             
            </ul>
            {/* <SearchForm/> */}
            <div className="form-check form-switch mx-3">
        <input className="form-check-input"  type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > Mode</label>
      </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
