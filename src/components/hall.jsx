import React, { Component } from "react";
import Home from "./home";

class Hall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getSeconds(),
      colorLive: this.changeBackgroundColor(),
      
    };
    
  }

  render() {
    var styles = {
        "backgroundColor": this.state.colorLive,
      }
    return <h2 style={styles}>{this.state.time}</h2>;
  }

  changeBackgroundColor() {
    var randomColor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    this.setState(function (state) {
      state.colorLive = randomColor;
      return state;
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState(function (state) {
      state.time = new Date().getSeconds();
      return state;
    });
    if (this.state.time % 4 == 0) {
      this.changeBackgroundColor();
    }
  }
}

export default Hall;
