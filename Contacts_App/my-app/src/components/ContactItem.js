import React, { Component } from 'react';

class ContactItem extends Component {

  render() {
    return (
      <li>
        Name: {this.props.contact.name} <br /> 
        Location: {this.props.contact.city}, {this.props.contact.state} 
        <br /><br />
      </li>
    );
  }
}

export default ContactItem;
