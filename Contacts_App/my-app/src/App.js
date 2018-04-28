import React, { Component } from 'react';
import Contacts from './components/Contacts.js';
import AddContact from './components/AddContact.js';
import uuid from 'uuid';

class App extends Component {

  constructor() {
    super()
  }

  getContacts() {
    this.setState(
      {
        contacts: [
          {
            id: uuid.v4(),
            name: "John",
            email: "John@gmail.com",
            phone: "222-432-1232",
            address: "100 Main St",
            city: "Dallas",
            state: "TX",
            zipcode: "77985" 
          },
          {
            id: uuid.v4(),
            name: "Bob",
            email: "Bob@gmail.com",
            phone: "222-432-4230",
            address: "102 First St",
            city: "Austin",
            state: "TX",
            zipcode: "77890" 
          },
          {
            id: uuid.v4(),
            name: "Jane",
            email: "John@gmail.com",
            phone: "222-432-1932",
            address: "100 Houston St",
            city: "Houston",
            state: "TX",
            zipcode: "77027" 
          }
        ]
      }
    )
  }

  componentWillMount() {
    this.getContacts();
  }

  componentDidMount() {
    this.getContacts();
  }

  handleAddContacts(contact) {
    console.log(contact);

    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({contact:contacts})
  }

  handleDeleteContacts(id) {
    let contacts = this.state.contacts;

    let index = contacts.findIndex(x => x.id === id);

    contacts.splice(index, 1);

    this.setState({contacts:contacts});
  }

  render() {
    console.log("Test")
    return (
      <div>
        <AddContact addContact={this.handleAddContacts.bind(this)}/>
        <br /><br />
        <h2>Contact List</h2>
        <Contacts onDelete={this.handleDeleteContacts.bind(this)} contacts={this.state.contacts} />
      </div>
      
    );
  }
}

export default App;
