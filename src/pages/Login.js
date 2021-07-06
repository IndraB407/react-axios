import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import jwtDecode from 'jwt-decode';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  login = () => {
    const { username, password } = this.state;
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    axios.post(`http://localhost:8080/api/login`, params)
      .then(params => {
        const response = params.data.results;
        const tokenData = jwtDecode(response);
        localStorage.setItem("token", response)
        localStorage.setItem("expiresIn", tokenData.exp * 1000)
        localStorage.setItem("role", tokenData.role)
        this.props.history.push(`/home`);
      })
      .catch(err => {
        alert("Username or password didnt match")
      })
  }

  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-5">
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" onChange={(event) => this.changeText(event)} type="text" placeholder="Enter your username" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" onChange={(event) => this.changeText(event)} type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button onClick={this.login}>Login</Button>
          </Form>
        </Container>
      </React.Fragment>
    )
  }
}

export default Login