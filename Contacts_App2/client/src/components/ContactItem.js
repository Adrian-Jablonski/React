import React, { Component } from 'react';

class ContactItem extends Component {

  state = {
    showResults: false
  }
  
  deleteContact(id) {
    console.log(id);

    this.props.onDelete(id);
  }

  showMore(id) {
    if (this.state.showResults === false) {
      this.setState({showResults: true});
    }
    else {
      this.setState({showResults: false});
    }

    console.log(id);
  }

  render() {
    return (
      <li>
        Name: {this.props.contact.name} <br /> 
        Location: {this.props.contact.city}, {this.props.contact.state}  {this.props.contact.zipcode} <br />
        {this.state.showResults ? <ShowMore contact={this.props.contact} /> : null } <br />  
        
        <a href="#" onClick = {this.showMore.bind(this)}>Show More</a> | 
        {/* Show address, Phone Number, and Email when clicked */}
        <a href="#" onClick = {this.deleteContact.bind(this, this.props.contact.id)}> Delete</a>
        <br /><br /> 
      </li>
    );
  }
}

class ShowMore extends Component{
    render() {
      return (
        <div>
          Address: {this.props.contact.address} <br /> 
          Phone Number: {this.props.contact.phone} <br /> 
        Email: {this.props.contact.email} <br />
        
        </div>
      )
    }
}

export default ContactItem;
