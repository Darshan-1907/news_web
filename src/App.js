
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import About from './component/About';
import Contact from './component/Contact';
export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar/>
        <News/>
      </div>
      
    )
  }
}
