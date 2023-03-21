import React from 'react';
import LifeCycleB from './LifeCycleB';

/* in this component we can learn aboutcomponent life cycle
 1) component mounting lifecycle (LifeCycleA Component)
    ~ Mounting means putting elements into the DOM.
        i)constructor
        ii)static getDerivedStateFromProps
        iii) render method
        iv)  componentDidMount

        The render() method is required and will always be called, the others are optional and will be called if you define them
    flow  => constructor -> static getDerivedStateForm -> render -> child component (LifeCycle B)-> last    componentDidMount
  
  2) Component Updating lifecycle
    The next phase in the lifecycle is when a component is updated.A component is updated  whenever there is a change in the component's state or props.React has five built-in methods that gets called, in this order, when a component is updated:

      i)getDerivedStateFromProps()
      ii)shouldComponentUpdate()
      iii) render()
      iv)getSnapshotBeforeUpdate()
      v)componentDidUpdate()

  3)Unmounting
    The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.React has only one built-in method that gets called when a component is unmounted:

      i) componentWillUnmount()
*/
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
  shouldComponentUpdate() {
    console.log('LifeCycle A shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('LifeCycle A getSnapshotBeforeUpdate ');
    return null;
  }

  componentDidUpdate() {
    console.log('Lifecycle A componentDidUpdate');
  }
  changeState = () => {
    this.setState({
      name: 'codeEvulution',
    });
  };

  render() {
    console.log('LifeCycleA render method');
    return (
      <div>
        <button onClick={this.changeState}>change state</button>
        lifecycle A render method
        <LifeCycleB />
      </div>
    );
  }
}
export default LifeCycleA;
