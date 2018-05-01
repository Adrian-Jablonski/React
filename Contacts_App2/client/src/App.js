import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts.js';
import AddContact from './components/AddContact.js';
// import uuid from 'uuid';

class App extends Component {
  state = {contacts: []}
  getContacts() {
    fetch('/users')
      .then(res => res.json())
      .then(contacts => this.setState({ contacts }));
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

