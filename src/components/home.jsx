import React, { Component } from "react";
import Hall from "./hall";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1
          style={{ fontSize: 30, margin: 10 }}
          className="badge badge-primary"
        >
          {this.state.time}
        </h1>
        <Hall />
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }
}

export default Home;
