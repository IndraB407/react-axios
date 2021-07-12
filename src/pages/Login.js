import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

import { connect } from 'react-redux'

import { login } from '../redux/actions/auth'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  submitData = (e) => {
    e.preventDefault();
    const { username, password } = this.state
    this.props.login(username, password)
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
            <Button onClick={this.submitData}>Login</Button>
          </Form>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => (
  { auth: state.auth }
)

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)