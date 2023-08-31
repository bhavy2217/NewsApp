import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 15;
  // apiKey = process.env.REACT_APP_NEWS_API;
apiKey = "b1396de3da8a4c7291e83e817c0c12f9"

  state = {
    progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  //render Method is lifeCycle method
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

