import React, { Component } from 'react';
import ContactItem from './ContactItem.js';

class Contacts extends Component {

  render() {
    let contactItems;

    if(this.props.contacts) {
      // Sorts each array by name
      contactItems = this.props.contacts.sort((a,b) => a.name > b.name).map(contact => {
        console.log(contact);
        return (
          <ContactItem key={contact.name} contact = {contact} />
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
