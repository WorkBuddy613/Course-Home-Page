import React, { Component } from "react";
import Logo from "./../asset/WorkBuddyLogo.PNG";
import "./CoursePage.css";

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Introduction from "./Introduction";
import Announcements from "./Announcements";
import Syllabus from "./Syllabus";
import Lessons from "./Lessons";
  
class CoursePage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <img src={Logo} alt="Logo" height={150}/>
          <ul className="header">
            <li><NavLink to="/CoursePage/Introduction">Introduction</NavLink></li>
            <li><NavLink to="/CoursePage/Syllabus">Syllabus</NavLink></li>
            <li><NavLink to="/CoursePage/Announcements">Announcements </NavLink> </li>
            <li><NavLink to="/CoursePage/Lessons">Lessons</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/CoursePage/Introduction" component={Introduction}/>
            <Route path="/CoursePage/Announcements" component={Announcements}/>
            <Route path="/CoursePage/Lessons" component={Lessons}/>
            <Route path="/CoursePage/Syllabus" component={Syllabus}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default CoursePage;