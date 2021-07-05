import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  login = () => {
    const {username, password} = this.state;
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    axios.post(`http://localhost:8080/api/login`, params)
      .then(params => {
        this.props.history.push(`/transaction`);
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