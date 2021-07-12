import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getBirthdayUser } from '../redux/actions/user'

class Birthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: null,
      yesterday: null,
      twoDaysAgo: null
    }
  }

  componentDidMount() {
    let today = new Date();
    let todayString = today.toISOString().split('T')[0];

    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let yesterdayString = yesterday.toISOString().split('T')[0];

    let twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    let twoDaysAgoString = twoDaysAgo.toISOString().split('T')[0];

    this.setState({
      today: todayString, yesterday: yesterdayString, twoDaysAgo: twoDaysAgoString
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mt-5 mb-5">Birthday user page</h1>
        <button onClick={() => this.props.getBirthdayUser(this.state.today)}>Today</button>
        <button onClick={() => this.props.getBirthdayUser(this.state.yesterday)}>Yesterday</button>
        <button onClick={() => this.props.getBirthdayUser(this.state.twoDaysAgo)}>Two days ago</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => (
  { token: state.auth.token }
)

const mapDispatchToProps = { getBirthdayUser }

export default connect(mapStateToProps, mapDispatchToProps)(Birthday)