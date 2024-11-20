import React, { Component } from 'react'
import background from './background.png'
export class News extends Component {
  render() {
    let {title,description,imageUrl,url,mode}=this.props;
    return (
      <>
        <div className={`card text-bg-${mode} my-3`}>
  <img src={imageUrl?imageUrl:background} className="card-img-top" alt="Loading Er"/>
  <div className="card-body">
    <h5 className="card-title">{title?title.substring(0,30):""+"..."}</h5>
    <p className="card-text">{description?description.substring(0,80):""+"..."}</p>
    <a href={url}target="_blank" rel="noreferrer" className={`btn btn-sm btn-${mode==='light'?'dark':'light'}`}>Read More</a>
  </div>
</div>
      </>
    )
  }
}

export default News
