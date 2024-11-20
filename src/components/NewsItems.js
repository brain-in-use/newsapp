import React, { Component } from "react";
import News from "./News";
import Loading from "./Loading";
import logo3 from "./logo3.PNG";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsItems extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "science",
    mode:"light"
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    mode: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}=2024-11-15&sortBy=popularity&apiKey=6b87c57f5027403f9d5dc158704c7f9c&page=1&pageSize=${this.props.pageSize}`;
    this.props.setProgress(10);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseData = await data.json();
    this.props.setProgress(100);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  // handelPrevBtn = async () => {
  //   let url = `https://newsapi.org/v2/everything?q=${
  //     this.props.category
  //   }=2024-11-15&sortBy=popularity&apiKey=6b87c57f5027403f9d5dc158704c7f9c&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parseData.articles,
  //     loading: false,
  //   });
  // };

  // handelNextBtn = async () => {
  //   if (
  //     Math.ceil(this.state.totalResults / this.props.pageSize) >=
  //     this.state.page + 1
  //   ) {
  //     let url = `https://newsapi.org/v2/everything?q=${
  //       this.props.category
  //     }=2024-11-15&sortBy=popularity&apiKey=6b87c57f5027403f9d5dc158704c7f9c&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parseData = await data.json();
  //     console.log(this.state.totalResults);
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parseData.articles,
  //       loading: false,
  //     });
  //   }
  // };

  fetchData= async()=>{
    let url = `https://newsapi.org/v2/everything?q=${
      this.props.category
    }=2024-11-15&sortBy=popularity&apiKey=6b87c57f5027403f9d5dc158704c7f9c&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
  
    this.props.setProgress(10);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseData = await data.json();
    this.setState({
      page: this.state.page+1,
      articles: this.state.articles.concat(parseData.articles),

    });
    this.props.setProgress(100);
  }

  render() {
    return (
      <div>
        <div
          className="container text-center my-3"
        >
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length<this.state.totalResults}
            loader={<Loading/>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            // refreshFunction={this.refresh}
            // pullDownToRefresh
            // pullDownToRefreshThreshold={50}
            // pullDownToRefreshContent={
            //   <h3 style={{ textAlign: "center" }}>
            //     &#8595; Pull down to refresh
            //   </h3>
            // }
            // releaseToRefreshContent={
            //   <h3 style={{ textAlign: "center" }}>
            //     &#8593; Release to refresh
            //   </h3>
            // }
          >
            
          
          <h1>
            <img src={logo3} width={150} ></img>Swift News - TOP HEADLINES{" "}
          </h1>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-4" key={element.title}>
                    <News
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      mode={this.props.mode}
                    />
                  </div>
                );
              })}
          </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default NewsItems;
