import React, { Component } from 'react'

export class News extends Component {
  render() {
    let {title,description,imageUrl,url}=this.props;
    return (
      <>
        <div className="card my-3" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="Loading Er"/>
  <div className="card-body">
    <h5 className="card-title">{title?title.substring(0,30):""+"..."}</h5>
    <p className="card-text">{description?description.substring(0,80):""+"..."}</p>
    <a href={url}target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </>
    )
  }
}

export default News
