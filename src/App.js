import React from 'react';
import './style.css';
import Welcome from './Componets/Welcome.js';
import Head from './Componets/Profile.js';
import Message from './Componets/Message';
import Counter from './Componets/Counter';
import FunctionClick from './Componets/FunctionClick';
import EventBider from './Componets/EventBinder';
import NameList from './Componets/NameList';
import Form from './Componets/Form';
import LifeCycleA from './Componets/LifeCycleA';

class App extends React.Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  render() {
    /*const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ];*/
    const { characters } = this.state;
    return (
      <div className="Container">
        <LifeCycleA />
        <Form />
        <NameList />
        <Message />
        <EventBider />
        <FunctionClick />
        <Counter />
        <Welcome
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Head />
      </div>
    );
  }
}

export default App;
