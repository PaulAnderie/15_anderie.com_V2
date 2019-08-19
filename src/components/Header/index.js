import React, {Component} from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends Component {
  render() {
    const {logo, linkedinImg, linkedinUrl, btn} = this.props;
    return (
      <header className='header'
      >
        <div className='logoWrapper'>
          <Link  className='logo' to="/ukraine-version/">
            <img src={logo} alt=""/>
          </Link>
          <a className='linkedin' href={linkedinUrl}>
            <img src={linkedinImg} alt=""/>
          </a>
        </div>
        <button className='btn'>
            {btn}
        </button>
      </header>
    )
  }
}

export default Header
