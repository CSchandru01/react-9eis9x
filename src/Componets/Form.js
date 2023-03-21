import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      topic: '',
    };
  }
  handleusernamechange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleSelect = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = () => {
    alert(`${this.state.username}${this.state.topic}`);
    event.preventDefault()
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleusernamechange}
          ></input>
        </div>
        <div>
          <label>Job</label>
          <select value={this.state.topic} onChange={this.handleSelect}>
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
            <option value="Hr">Hr</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
