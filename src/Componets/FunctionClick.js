import React from 'react';

class FunctionClick extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.click}>Click</button>
      </div>
    );
  }
  click() {
    console.log('hi from click');
  }
}
export default FunctionClick;
