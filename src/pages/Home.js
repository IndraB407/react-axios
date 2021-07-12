import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'

import { logout } from '../redux/actions/auth'
import { getUser } from '../redux/actions/user'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: [],
      role: null,
    }
  }

  componentDidMount() {
    this.props.getUser(localStorage.getItem('token'))
  }

  render() {
    const { staff } = this.state;
    return (
      <React.Fragment>
        <h1 className="text-center mt-5 mb-5">All Mitrais Staff</h1>
        <h1>{this.props.token}</h1>
        {localStorage.getItem('role') == 1 ? <p>Sorry y cannot access the data from this page</p> :
          <table className="justify-content-center">
            <thead>
              <tr>
                <th style={{ width: '300px', textAlign: 'center', border: '1px solid black' }}>Name</th>
                <th style={{ width: '300px', textAlign: 'center', border: '1px solid black' }}>Email</th>
                <th style={{ width: '100px', textAlign: 'center', border: '1px solid black' }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((item) => {
                return (
                  <tr key={item._id}>
                    <td style={{ width: '300px', textAlign: 'center', border: '1px solid black' }}>{item.name}</td>
                    <td style={{ width: '300px', textAlign: 'center', border: '1px solid black' }}>{item.email}</td>
                    <td style={{ width: '100px', textAlign: 'center', border: '1px solid black' }}>{item.grade}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        }
        <button>
          <Link to='/birthday'>Birthday page</Link></button>
        <button onClick={this.props.logout}>
          <Link to='/login'>Logout</Link></button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => (
  { token: state.auth.token }
)

const mapDispatchToProps = { logout, getUser }

export default connect(mapStateToProps, mapDispatchToProps)(Home)