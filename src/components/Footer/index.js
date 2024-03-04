import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <Link to="/">
      <AiFillHome />
    </Link>
    <Link to="/employee">
      <FaUser />
    </Link>
  </div>
)

export default withRouter(Footer)
