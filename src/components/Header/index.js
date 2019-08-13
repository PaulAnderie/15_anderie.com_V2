import React, {Component} from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends Component {
  render(){
  const {logo, linkedin, btn} = this.props;
    return(
      <header className='headerWrapper'
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt=""/>
            </Link>
          </h1>
        </div>
      </header>
    )
  }
}

export default Header
