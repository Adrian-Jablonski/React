import React, { Component } from 'react';
import ContactItem from './ContactItem.js';

class Contacts extends Component {

  deleteContact(id) {
    this.props.onDelete(id);
  }

  render() {
    let contactItems;

    if(this.props.contacts) {
      // Sorts each contact by name
      contactItems = this.props.contacts.sort((a,b) => a.name > b.name).map(contact => {
        console.log(contact);
        return (
          <ContactItem onDelete={this.deleteContact.bind(this)} key={contact.id} contact = {contact} />
        )
      })
    }
    
    return (
      <div>
        {contactItems} <br />

      </div>
      
    );
  }
}

export default Contacts;
