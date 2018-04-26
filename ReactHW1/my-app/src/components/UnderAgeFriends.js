import React, { Component } from 'react';
import UnderAgeFriendItem from './UnderAgeFriendItem.js'

class UnderAgeFriends extends Component {
    render() {
      let underAgeFriends;

      if(this.props.friends) {
        underAgeFriends = this.props.friends.map(friend => {  //loops through projects
          //console.log(project);
          if (friend.age < 21) {
            return (
              <UnderAgeFriendItem key={friend.name} friend = {friend} />
            )
          }
  
        });
  
      }
  
      return (
        <div>
          {underAgeFriends} <br />
          
        </div>
      );
    }
  }

export default UnderAgeFriends;