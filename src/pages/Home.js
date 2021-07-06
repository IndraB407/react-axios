import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'

import { logout } from '../redux/actions/auth'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: [],
      role: null,
    }
  }

  componentDidMount() {
    this.initData();
  }

  // logout = () => {
  //   localStorage.clear();
  // }

  initData = () => {
    const config = {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
    axios.get(`http://localhost:8080/api/users/getAll`, config)
      .then(res => {
        const response = res.data;
        const staff = response.data;
        this.setState({ staff });
      })
      .catch(error => {
        console.log(error);
      })
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
        <button onClick={this.props.logout}>
          <Link to='/'>Logout</Link></button>

        {/* <button onClick={this.logout}>
          <Link to='/'>Logout</Link></button> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => (
  { token: state.auth.token }
)

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(Home)