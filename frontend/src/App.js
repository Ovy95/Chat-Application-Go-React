import React, { Component } from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';

import './App.css';
import { connect, sendMsg } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }



  render() {
  return (

    <div className="App">

      
<div className="container">


      <Header />


      <ChatInput send={this.send} />
      <br></br>

      
      <br></br>
      <br></br>
    <h2></h2>
      <br></br>
      <br></br>
      
      
      <ChatHistory chatHistory={this.state.chatHistory} />
      
      
      
</div>
    </div>
  
  );
 }
}


export default App;