import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.logHandle = this.logHandle.bind(this);
    this.logIn = this.logIn.bind(this);

    this.state = {
      username: '',
    }
  }

  logHandle(event) {
    this.setState({
      username: event.target.value
    })
  }

  logIn() {
    this.setState({
      username: '',
    })
  }

  render() {
    return(
      <div class='message-board'>
        <h2>Pick a screen name!</h2>

        <form>
          <input onChange={this.logHandle} type='text' placeholder='Username' />
          <button onClick={this.logIn}>Log In!</button>
        </form>
      </div>
    )
  }
}

export default Login;
