import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      pageSize: 21, // Number of articles per page
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const { page, pageSize } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=75b352c8747047d083cd95bff906cdbf&pageSize=${pageSize}&page=${page}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.fetchNews
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.fetchNews
    );
  };

  render() {
    const { articles, page, pageSize, totalResults, loading } = this.state;

    return (
      <div className="container my-3">
        <center>
          <h1 className="text-center">News 24/7 - Top Headlines</h1>
        </center>
        {loading && <h3 className="text-center">Loading...</h3>}
        <div className="row">
          {!loading &&
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  Title={element.title ? element.title.slice(0, 52) : "No Title"}
                  Description={
                    element.description
                      ? element.description.slice(0, 70)
                      : "No Description"
                  }
                  imageUrl={element.urlToImage}
                  newsurl={element.url}
                  className="news-item"
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between mt-3">
          <button
            disabled={page <= 1}
            className="btn btn-primary btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page * pageSize >= totalResults}
            className="btn btn-secondary btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
