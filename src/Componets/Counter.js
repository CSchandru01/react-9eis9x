import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    //this.setState(
    // {
    // count: this.state.count + 1,
    // },
    //() => {
    //console.log('the callback value', this.state.count);
    //}
    //);
    this.setState((preState) => ({
      count: preState.count + 1,
    }));
    console.log(this.state.count);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <br />
        Count = {this.state.count}
        <br />
        <br />
        <button onClick={() => this.incrementFive()}>increment</button>
      </div>
    );
  }
}
export default Counter;
