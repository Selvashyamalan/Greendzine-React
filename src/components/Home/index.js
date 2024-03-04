import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <div className="home-container">
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
        <div className="production-container">
          <p className="employee">Employee Productivity Dashboard</p>
          <div className="production-chart">
            <div className="day-chart">
              <p className="day">Production on Monday</p>
              <chart className="chart-1" />
            </div>
            <p className="percentage">4%</p>
          </div>
          <div className="production-chart">
            <div className="day-chart">
              <p className="day">Production on Monday</p>
              <chart className="chart-2" />
            </div>
            <p className="percentage">92%</p>
          </div>
          <div className="production-chart">
            <div className="day-chart">
              <p className="day">Production on Monday</p>
              <chart className="chart-3" />
            </div>
            <p className="percentage">122%</p>
          </div>
          <div className="production-chart">
            <div className="day-chart">
              <p className="day">Production on Monday</p>
              <chart className="chart-4" />
            </div>
            <p className="percentage">93%</p>
          </div>
          <div className="production-chart">
            <div className="day-chart">
              <p className="day">Production on Monday</p>
              <chart className="chart-5" />
            </div>
            <p className="percentage">89%</p>
          </div>
          <div className="production-chart">
            <div className="day-chart">
              <p className="day">Production on Monday</p>
              <chart className="chart-6" />
            </div>
            <p className="percentage">98%</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Home
