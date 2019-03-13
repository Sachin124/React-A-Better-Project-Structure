import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state ={
    person:[
      {name : 'Sachin', age: 26}
    ],
    otherState: 'Other State!'
  }

  chnageHandler = (event)=>{
    return this.setState({
      person:[
        {name : event.target.value, age: 31}
      ],
      otherState: 'Other State Works!'
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello I am from App Component!
          </p>
          {/* <button onClick={this.chnageHandler.bind(this, 'Sagar')}>Change Name</button> */}
         <Person name={this.state.person[0].name}
          age={this.state.person[0].age}
          changed={this.chnageHandler}> My Hobbies is Coding! </Person>
         <p>{this.state.otherState}</p>
        </header>
      </div>
    );
  }
}

export default App;
