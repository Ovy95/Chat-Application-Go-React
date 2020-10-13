import React, { Component } from "react";
import "./Message.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      type: temp,
      message: temp,
      ID: temp,
    };
  }

  render() {
    return <div className="Message">Username:"{this.state.message.id}"  Message:"{this.state.message.body}" {this.state.message.type}</div>;
  }
}

export default Message;