import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';

export default class App extends Component {

  state ={
    progress:0
  }
  setProgress =(progress) =>{
    this.setState({progress:progress})
  }
  render() {
      return (
      <div>
        < >
        <Router>
        <Navbar/>

        <LoadingBar
        color='red'
        progress={this.state.progress}
      />

        <Routes>
        <Route path="/" element={<News setProgress ={this.setProgress} country='in' category ="general"/>} />
        <Route path="/science" element={<News setProgress ={this.setProgress} country='in' category ="science"/>} />
        <Route path="/sports" element={<News setProgress ={this.setProgress} country='in' category ="sports"/>} />
        <Route path="/technology" element={<News setProgress ={this.setProgress} country='in' category ="technology"/>} />
        <Route path="/health" element={<News setProgress ={this.setProgress} country='in' category ="health"/>} />
        <Route path="/entertainment" element={<News setProgress ={this.setProgress} country='in' category ="entertainment"/>} />
        <Route path="/business" element={<News setProgress ={this.setProgress} country='in' category ="business"/>} />
    </Routes>
        </Router>
        </>
      </div>
    )
  }
}

