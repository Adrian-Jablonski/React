import React, { Component } from 'react';

class UnderAgeFriend extends Component {
  render() {
    return (
      <div>
        
        Hello {this.props.friend.name}. Age {this.props.friend.age}<br />
        
    </div>
    );
  }
}

export default UnderAgeFriend;