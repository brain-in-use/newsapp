import React, { Component } from "react";
import News from "./News";
export class NewsItems extends Component {
 

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
async componentDidMount() {
  let url="https://newsapi.org/v2/everything?q=headlines=2024-11-15&sortBy=popularity&apiKey=6b87c57f5027403f9d5dc158704c7f9c";
  let data = await fetch(url);
  let parseData= await data.json();
  console.log(parseData)
  this.setState({articles:parseData.articles}); 
}


  render() {
    return (
      <>
        <div className="container text-center my-3">
          <div className="row">
            {this.state.articles.map((element) => {
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
            })}
          </div>
        </div>
      </>
    );
  }
}

export default NewsItems;
