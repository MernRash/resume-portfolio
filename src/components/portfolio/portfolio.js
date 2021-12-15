import React, { Component } from "react";
// import {a} from 'react-router-dom';
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="projects-container" id="Portfolio">
        <span>My Portfolio </span>

        <div className="projects-img-container">
          <a
            href="https://mernrash.github.io/Basic-Html/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item1 items">
              <h3>Backtracking</h3>
            </div>
          </a>
          <a
            href="https://mernrash.github.io/cssAss-6/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item2 items">
              <h3>Sahara</h3>
            </div>
          </a>
          <a
            href="https://mernrash.github.io/cssAss-5//"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item3 items">
              <h3>Car Animation</h3>
            </div>
          </a>
          <a
            href="https://mernrashreactemplyee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item4 items">
              <h3>Feedback Form</h3>
            </div>
          </a>
          <a
            href="https://mernrash.github.io/Clock-Project/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item5 items">
              <h3>Clock App</h3>
            </div>
          </a>
          <a
            href="https://mernrash.github.io/Todo-UI-Web-JS/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item6 items">
              <h3>ToDo List</h3>
            </div>
          </a>
      
       <a
            href="https://mernrash-blog.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item7 items">
              <h3>React Blog App</h3>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
