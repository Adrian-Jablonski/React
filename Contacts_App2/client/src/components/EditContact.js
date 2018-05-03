import React, { Component } from 'react';
import axios from 'axios';

class EditContact extends Component {
  state = {newContact:[]};

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
      }, 
      function() {
        this.props.addContact(this.state.newContact);
        // Adds contact to list
        axios.post("/addContact", {
          name: this.refs.name.value,
          email: this.refs.email.value,
          phone: this.refs.phone.value,
          address: this.refs.address.value,
          city: this.refs.city.value,
          state: this.refs.state.value,
          zipcode: this.refs.zipcode.value
        })
        .then(function(response) {
          console.log(response)
        })
      })
      
    }
    // e.target.reset();
    // // Clears input fields after submission
    //   this.refs.name.value = ""
    //   this.refs.email.value = ""
    //   this.refs.phone.value = ""
    //   this.refs.address.value = ""
    //   this.refs.city.value = ""
    //   this.refs.state.value = ""
    //   this.refs.zipcode.value = ""
  }
  

  render() {
    return (
      <div>
        <h1>Add Contact</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name: </label>
            <input type="text" ref="name" name="name" /> 
          </div>
          <div>
            <label>E-mail: </label>
            <input type="text" ref="email" name="email" />
          </div>
          <div>
            <label>Phone Number: </label>
            <input type="text" ref="phone" name="phone" />
          </div>
          <div>
            <label>Address: </label>
            <input type="text" ref="address" name="address" />
          </div>
          <div>
            <label>City: </label>
            <input type="text" ref="city" name="city" />
          </div>
          <div>
            <label>State: </label>
            <input type="text" ref="state" name="state" />
          </div>
          <div>
            <label>Zip Code</label>
            <input type="text" ref="zipcode" name="zipcode" />
          </div>
          <input type="submit" value="Add Contact" />
        </form>
      </div>
      
    );
  }
}

export default EditContact;