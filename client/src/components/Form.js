import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form action="/api/user"  onSubmit={this.props.sendData}>
        <label htmlFor="username">Username</label> <br/>
        <input type="text" id="username" name="username"/> <br/>
        <label htmlFor="age">Age</label> <br/>
        <input type="text" id="age" name="age"/> <br/>
        <button type="Submit">Send</button>
      </form>
    )
  }
}
