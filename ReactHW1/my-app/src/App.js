import React, { Component } from 'react';
import Friends from './components/Friends.js'
import UnderAgeFriends from './components/UnderAgeFriends.js'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      
    }

   }

   componentWillMount() {
     this.setState(
       {
         friends: [
           {
            name: "John",
            age: 20
           },
           {
            name: "Bob",
            age: 27
           },
           {
            name: "Jane",
            age: 25
           }
           
         ]
       }
     )
   }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Over 21 Friends</h2>
        <Friends friends={this.state.friends} />
        <h2>Under Age Friends</h2>
        <UnderAgeFriends friends={this.state.friends} />
      </div>
    )
  }

}

export default App;
