import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

setUsername = (event) => {
    this.setState({
    username: event.target.value
  })
  //console.log(this.state.username)
}

setPassword = (event) => {
    this.setState({
    password: event.target.value
  })
  //console.log(this.state.password)
}

handleSubmit = (event) => {
  event.preventDefault()
  if (this.state.username !== '' && this.state.password !== ''){
  console.log(this.state.password)
  return this.props.handleLogin(this.state)
  }
}


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={event => this.setUsername(event)} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={event => this.setPassword(event)} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
