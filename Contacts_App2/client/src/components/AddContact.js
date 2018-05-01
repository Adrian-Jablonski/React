import React, { Component } from 'react';

class AddContact extends Component {

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.name.value === '') {
      alert('Name is required');
    } else {
      this.setState(
        {newContact:{
          name: this.refs.name.value,
          email: this.refs.email.value,
          phone: this.refs.phone.value,
          address: this.refs.address.value,
          city: this.refs.city.value,
          state: this.refs.state.value,
          zipcode: this.refs.zipcode.value
          // Retrieves user input from form
        } 
      }, function() {
        this.props.addContact(this.state.newContact);
        // Adds contact to list
      })
    }
  }
  

  render() {
    return (
      <div>
        <h1>Add Contact</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name: </label>
            <input type="text" ref="name" />
          </div>
          <div>
            <label>E-mail: </label>
            <input type="text" ref="email" />
          </div>
          <div>
            <label>Phone Number: </label>
            <input type="text" ref="phone" />
          </div>
          <div>
            <label>Address: </label>
            <input type="text" ref="address" />
          </div>
          <div>
            <label>City: </label>
            <input type="text" ref="city" />
          </div>
          <div>
            <label>State: </label>
            <input type="text" ref="state" />
          </div>
          <div>
            <label>Zip Code</label>
            <input type="text" ref="zipcode" />
          </div>
          <input type="submit" value="Add Contact" />
        </form>
      </div>
      
    );
  }
}

export default AddContact;