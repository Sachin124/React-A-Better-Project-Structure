import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css'

import Person from './Person/Person'

class App extends Component {
  state ={
    persons:[
      {id:'asdf1',  name : 'Sachin', age: 26},
      {id:'asdf2',  name : 'Sagar', age: 31},
      {id:'asdf3',  name : 'Sachya', age: 25}
    ],
    otherState: 'Other State!',
    isDisplay: false
  }


  toggleSwitch = ()=>{
    const doesShow = this.state.isDisplay;
    return this.setState({
      isDisplay: !doesShow
    })
  }

  updateEventHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })


    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({
      persons:persons
    })
  }
 

  deletePerson = (personIndex)=>{
    // const person = this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({persons: person})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #61dafb',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.isDisplay ) {
      persons = (          
        <div className="Person">
       {this.state.persons.map((person, index)=>{
         return  <Person
         delete={()=>this.deletePerson(index)}
         changed={(event)=>this.updateEventHandler(event, person.id)}
         name={person.name}
         age={person.age}
         key={person.id}
        > My Hobbies is Coding! </Person>
       })}
        <p>{this.state.otherState}</p>
        </div> 
      );    
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello I am from App Component!
          </p>
          <button style={style} onClick={this.toggleSwitch}>Change Name</button>
      
          {persons}
        </header>
      </div>
    );

  
  }
}

export default App;
