import React, { Component } from "react";
import News from "./News";
import Loading from "./Loading";
import logo2 from './logo2.PNG'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class NewsItems extends Component {

  static defaultProps={
    country: 'in',
    pageSize: 8,
    category: 'science'
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
  }
async componentDidMount() {
  let url=`https://newsapi.org/v2/everything?q=${this.props.category}=2024-11-15&sortBy=popularity&apiKey=6b87c57f5027403f9d5dc158704c7f9c&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parseData= await data.json();
  // console.log(parseData)
  this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false}); 
}

handelPrevBtn = async()=>{
  let url=`https://newsapi.org/v2/everything?q=${this.props.category}=2024-11-15&sortBy=popularity&apiKey=6b87c57f5027403f9d5dc158704c7f9c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parseData= await data.json();
  this.setState(
    {
      page:this.state.page-1,
    articles:parseData.articles,
    loading:false
  }
  )
  
}

handelNextBtn = async()=>{
  if(Math.ceil(this.state.totalResults/this.props.pageSize)>=this.state.page+1){
    let url=`https://newsapi.org/v2/everything?q=${this.props.category}=2024-11-15&sortBy=popularity&apiKey=6b87c57f5027403f9d5dc158704c7f9c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData= await data.json();
    console.log(this.state.totalResults)
    this.setState(
      {
        page:this.state.page+1,
      articles:parseData.articles,
      loading:false
    }
    )
  }
}


  render() {
    return (
      <>
        <div className="container text-center my-3" 
      //   style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   height: '150vh',
      // }}
      >
        <h1><img src={logo2} width={100}></img>Swift News - News Headlines </h1>
          { this.state.loading && <Loading/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                
                <div className="col-4" key={element.title}>
                  <News
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            }       
            )}
          </div>
          <div className="d-flex justify-content-between">
                <button disabled={this.state.page<2} type="button" className="btn btn-dark" onClick={this.handelPrevBtn}>&larr;Previous</button>
                <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1} type="button" className="btn btn-dark" onClick={this.handelNextBtn}>Next&rarr;</button>
                </div>
        </div>
      </>
    );
  }
}

export default NewsItems;
