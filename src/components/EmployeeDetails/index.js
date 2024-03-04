import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const EmployeeDetails = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  render()
  return (
    <>
      <div className="employee-container">
        <div className="help-logo-container">
          <img
            src="https://res.cloudinary.com/dczulygca/image/upload/v1709450001/Greendzine/punfcimbmirnrgblebf9.png"
            className="help-image"
            alt="help"
          />
          <img
            src="https://res.cloudinary.com/dczulygca/image/upload/v1709450001/Greendzine/qk8dyfagtppb909hvyt0.png"
            alt="logo"
            className="logo-image"
          />
        </div>
      </div>
    </>
  )
}

export default EmployeeDetails
