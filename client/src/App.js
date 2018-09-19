import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {

  state = {
    userData: ''
  }

  loadData = () => {
    fetch('/api/user')
      .then(res=>res.json())
      .then(data => {
        this.setState({
          userData: data
        });
        console.log(this.state.userData);
      })
      .catch(err => {
        console.log(err);
      })
  }

  sendData = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const age = e.target.elements.age.value;
    var data = {
      username: username,
      age: age
    }
    fetch('/api/user', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const newUserData = this.state.userData.concat(data);
      this.setState({ userData: newUserData });
      console.log(this.state.userData);

    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
        <Form sendData={this.sendData}/>
        <button onClick={this.loadData}>Get</button>
      </div>
    );
  }
}

export default App;
