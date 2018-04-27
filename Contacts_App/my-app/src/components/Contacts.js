import React, { Component } from 'react';
import ContactItem from './ContactItem.js';

class Contacts extends Component {

  render() {
    let contactItems;

    if(this.props.contacts) {
      contactItems = this.props.contacts.map(contact => {
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
