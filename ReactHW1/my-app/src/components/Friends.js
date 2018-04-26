import React, { Component } from 'react';
import FriendItem from './FriendItem.js';

class Friends extends Component {
    render() {
      let friendItems;

      if(this.props.friends) {
        friendItems = this.props.friends.map(friend => {  //loops through projects
          //console.log(project);
          if (friend.age >= 21) {
            return (
              <FriendItem key={friend.name} friend = {friend} />
            )
          }
        });
  
      }
  
      return (
        <div>
          {friendItems} <br />
          
        </div>
      );
    }
  }

export default Friends;