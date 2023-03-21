import React from 'react';
class EventBinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello Ram',
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  // clickHandler() {
  // this.setState({
  // message: 'GoodBye',
  //});}

  clickHandler = () => {
    this.setState({
      message: 'goodbye',
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>click me</button>*/}

        {/*<button onClick={()=>this.clickHandler()}> Clickme</button>*/}

        {/*<button onClick={this.clickHandler}>click me</button>*/}
        <button onClick={this.clickHandler}>clickme</button>
      </div>
    );
  }
}
export default EventBinder;
