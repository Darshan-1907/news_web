
import React, { Component } from 'react'

export class Navbar extends Component {


  render() {
    return (
     <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
           
            <a className="navbar-brand" href="/">
            <img
                src="https://e7.pngegg.com/pngimages/678/286/png-clipart-news-24-24-7-service-television-channel-news-broadcasting-others-television-blue.png"
                alt="News 24/7 Logo"style={{ width: "120px", height: "60px", marginRight: "10px",  backgroundColor: "rgba(0, 0, 0, 0.5)" }}/><b style={{ fontSize:"30px",fontWeight:"bold"}}>News 24/7</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Section</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
                </li>
                </ul>
            </div>
         </div>
         </nav>

     </div>
     
    )

  }
  
}

export default Navbar
