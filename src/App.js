import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Birthday from './pages/Birthday'
import ProtectedRoute from './pages/ProtectedRoute';
import LoginRoute from './pages/LoginRoute';
import { connect } from 'react-redux';
import { authCheckToken } from './redux/actions/auth'


class App extends Component {
  componentDidMount() {
    Promise.resolve(
      this.props.authCheckToken()
    ).then(() => {
    });
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute
              isAuthenticated={this.props.token ? true : false}
              path="/"
              exact
              component={Home}
            />
            <ProtectedRoute
              isAuthenticated={this.props.token ? true : false}
              path="/birthday"
              exact
              component={Birthday}
            />
            <LoginRoute
              isAuthenticated={this.props.token ? true : false}
              path="/login"
              component={Login}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => (
  { token: state.auth.token }
)

const mapDispatchToProps = { authCheckToken }

export default connect(mapStateToProps, mapDispatchToProps)(App);