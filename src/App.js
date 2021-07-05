import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Transaction from './pages/Transaction'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/transaction" exact component={Transaction} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App; 