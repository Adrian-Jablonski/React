import React, { Component } from 'react';
import Contacts from './components/Contacts.js'
import AddContact from './components/AddContact.js'

class App extends Component {

  constructor() {
    super()
  }

  getContacts() {
    this.setState(
      {
        contacts: [
          {
            name: "John",
            email: "John@gmail.com",
            phone: "222-432-1232",
            address: "100 Main St",
            city: "Dallas",
            state: "TX",
            zipcode: "77985" 
          },
          {
            name: "Bob",
            email: "Bob@gmail.com",
            phone: "222-432-4230",
            address: "102 First St",
            city: "Austin",
            state: "TX",
            zipcode: "77890" 
          },
          {
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

  render() {
    console.log("Test")
    return (
      <div>
        <AddContact addContact={this.handleAddContacts.bind(this)}/>
        <br /><br />
        <h2>Contact List</h2>
        <Contacts contacts={this.state.contacts} />
      </div>
      
    );
  }
}

export default App;
