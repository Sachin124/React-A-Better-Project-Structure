import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state ={
    person:[
      {name : 'Sachin', age: 26}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello I am from App Component!
          </p>
         <Person name={this.state.person[0].name} age={this.state.person[0].age}> My Hobbies is Coding! </Person>
        </header>
      </div>
    );
  }
}

export default App;
