import React from 'react';

class LifeCycleB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'chandru',
    };
    console.log('lifecycle b constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('lifecycle B static method');
    return null;
  }
  componentDidMount() {
    console.log('LifeCycle B componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifeCycle B shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('LifeCycle B getSnapshotBeforeUpdate ');
    return null;
  }

  componentDidUpdate() {
    console.log('Lifecycle B componentDidUpdate');
  }

  render() {
    console.log('LifeCycle B render method');
    return <div>lifecycle A render method</div>;
  }
}
export default LifeCycleB;
