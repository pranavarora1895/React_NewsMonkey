import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  pageSize = 9;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar />

          <Routes>
            <Route
              path="/"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="ca"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country="ca"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="ca"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="ca"
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country="ca"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country="ca"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="ca"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="ca"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
