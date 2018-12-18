import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  state = {
    persons: [
      { name: 'Arya', age: 18 },
      { name: 'Sansa', age: 29 },
      { name: 'JonSnow', age: 32 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
// handleClick=()=>{
//   this.setState({
//     persons: [
//       { name: 'Daneryas', age: 18 },
//       { name: 'Cersi', age: 29 },
//       { name: 'Tyrion', age: 32 }
//     ]
//   })
// }
// handleChange = (e)=>{
//   this.setState({
//     persons: [
//       { name: e.target.value, age: 18 },
//       { name: e.target.value, age: 29 },
//       { name: e.target.value, age: 32 }
//     ]
//   })
// }
  

  toggle = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }
  toDelete=(Del)=>{
    const persons = [...this.state.persons];
    persons.splice(Del,1);
    this.setState({persons:persons})
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((virat,i)=>{
            return(
              <div>
                <List
                 name={virat.name} 
                 age={virat.age} 
                 delete={()=>this.toDelete(i)}
                 change={this.handleChange}/>
              </div>
            )
          }
          )}
          </div>
          
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button  style={style} onClick={this.toggle}>Toggle Persons</button>
        <button  style={style} onClick={this.handleClick}>ToChange</button>
        {persons}
      </div>
    );
  }
}

export default App;
