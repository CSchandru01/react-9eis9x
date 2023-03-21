import React from 'react';

// in this component we can learn aboutcomponent life cycle
// 1) component mounting lifecycle (LifeCycleA Component)
//    i)constructor
//    ii)static getDerivedStateFromProps
//    iii) render method
//    iv)  componentDidMount
// 2)
//  3)
//  4)
class LifeCycleA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'chandru',
    };
    console.log('lifecycleA constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('lifecycleA static method');
    return null;
  }
  componentDidMount() {
    console.log('LifeCycle A componentDidMount');
  }
  render() {
    console.log('LifeCycleA render method');
    return <div>lifecycle A render method</div>;
  }
}
export default LifeCycleA;
