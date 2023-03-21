import React from 'react';

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome Visitor',
    };
  }
  changeMessage() {
    this.setState({
      message: 'thank you subscribe',
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
