import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitErr: false,
    errorMsg: '',
  }

  sumbitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({showSubmitErr: true, errorMsg})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.sumbitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={this.updatePassword}
        />
      </>
    )
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <input
          type="text"
          className="input-field"
          placeholder="E-mail"
          value={username}
          onChange={this.updateUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitErr, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <>
        <div className="login-form-container">
          <img
            src="https://res.cloudinary.com/dczulygca/image/upload/v1709450001/Greendzine/taqikbcmaa6vl9b8v3lb.png"
            className="login-image"
            alt="login"
          />
          <h1 className="login-header">We are Electric</h1>
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container">{this.renderPassword()}</div>
            {showSubmitErr && <p className="error">{errorMsg}</p>}
            <button type="submit" className="login-btn">
              Login
            </button>
            <p className="forgot">Forgot Password?</p>
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
