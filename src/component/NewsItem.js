  import React, { Component } from 'react'


  export class NewsItem extends Component {

    render()
    {
  let {Title, Description,imageUrl,newsurl}  = this.props;
      return (
        <center>
        <div className='my-3'>
          <div className="card" style={{width: "21rem", height:"23rem"}}>
    <img src={imageUrl} className="card-img-top" width={150} height={150} alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{Title}..</h5>
      <p className="card-text">{Description}..</p>
      <a rel="nonreferrer" href={newsurl} target="_blank" className="btn btm-sm btn-dark">Read More</a>
    </div>
  </div>
          </div>
          </center>
        
      )
    }
  }

  export default NewsItem
