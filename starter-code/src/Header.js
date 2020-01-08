import React, { Component } from "react";
import Nav from "./Nav";
import "./App.css";

class Header extends Component {
  render() {
    return (        
      <div id="header">
        <Nav/>
        <h1> Hello Ironhackers! </h1>
      </div>
    );
  }
}

export default Header;