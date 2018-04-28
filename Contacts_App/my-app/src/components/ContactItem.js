import React, { Component } from 'react';

class ContactItem extends Component {

  deleteContact(id) {
    console.log(id);

    this.props.onDelete(id);
  }

  render() {
    return (
      <li>
        Name: {this.props.contact.name} <br /> 
        Location: {this.props.contact.city}, {this.props.contact.state}  {this.props.contact.zipcode} <br />
        Address: {this.props.contact.address} <br />
        Phone Number: {this.props.contact.phone} <br /> 
        Email: {this.props.contact.email} <br /> 
        <a href="#" onClick = {this.deleteContact.bind(this, this.props.contact.id)}>Delete</a>
        <br /><br />
      </li>
    );
  }
}

export default ContactItem;
