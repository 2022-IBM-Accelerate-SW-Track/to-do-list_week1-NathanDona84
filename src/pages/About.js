import React, { Component } from 'react';
import "./About.css";
import Nathan from "../assets/Nathan.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div> 
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {Nathan}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Nathan Dona</div>
            <div className="brief_description">
              Im a computer science student at UCF
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}