import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App; 