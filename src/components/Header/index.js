import React, {Component} from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends Component {
  render() {
    const {logo, linkedin, btn} = this.props;
    return (
      <header className='header'
      >
        <div className='logoWrapper'>
          <Link  className='logo' to="/">
            <img src={logo} alt=""/>
          </Link>
          <Link className='linkedin' to="/">
            <img src={linkedin} alt=""/>
          </Link>
        </div>
        <button className='btn'>
          {btn}
        </button>
      </header>
    )
  }
}

export default Header
