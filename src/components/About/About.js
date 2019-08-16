import React, {Component} from 'react'
import './about.css'

class About extends Component {
  render() {
    const {name, location, avatar, btn, title, description} = this.props;
    return (
        <div className='about wrapper'>
          <div className='about-header'>
            <div className='profile'>
              <img className='profile-img' src={avatar} alt=""/>
              <div className='profile-position'>
                <h1>{name}</h1>
                <span>{location}</span>
              </div>
            </div>
            <button className='btn'>{btn}</button>
          </div>
          <h2>{title}</h2>
          <p className='about-description'>{description}</p>
        </div>

    )
  }
}

export default About
