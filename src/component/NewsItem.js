import React, { Component } from 'react'


export class NewsItem extends Component {

  render()
   {
 let {Title, Description,ImageUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src={ImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <p className="card-text">{Description}</p>
    <a href="NewsDetail" className="btn btm-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem