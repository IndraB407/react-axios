import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        Transaction Page
        <button>
        <Link to='/'>To login page</Link></button>
      </React.Fragment>
    )
  }
}

export default Login 