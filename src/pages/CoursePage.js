import React, { Component } from "react";
import Logo from "./../asset/WorkBuddyLogo.PNG";
import Chest from "./../asset/istockphoto-472494666-612x612.jpg"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Introduction from "./Introduction";
import Announcements from "./Announcements";
import Syllabus from "./Syllabus";
import Lessons from "./Lessons";
  
class CoursePage extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <img src={Logo} alt="Logo" height={150}/>
          <img src={Chest}  alt ="Chest" height = {150}/>
          <ul className="header">
            <li><NavLink to="/Introduction">Introduction</NavLink></li>
            <li><NavLink to="/Syllabus">Syllabus</NavLink></li>
            <li><NavLink to="/Announcements">Announcements </NavLink> </li>
            <li><NavLink to="/Lessons">Lessons</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/Introduction" component={Introduction}/>
            <Route path="/Announcements" component={Announcements}/>
            <Route path="/Lessons" component={Lessons}/>
            <Route path="/Syllabus" component={Syllabus}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default CoursePage;