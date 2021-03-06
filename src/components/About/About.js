import React, {Component} from 'react'
import './about.css'

class About extends Component {
  render() {
    const {name, location, avatar, btn, title, description} = this.props;
    return (
        <div className='about wrapper'>
          <div className='about-header'>
            <div className='profile '>
              <img className='profile-img' src={avatar} alt=""/>
              <div className='profile-position'>
                <h2>{name}</h2>
                <span>{location}</span>
              </div>
            </div>
            <button className='btn' onClick={()=>{Calendly.initPopupWidget({url: 'https://calendly.com/paul-anderie/ask-me-anything'});return false;}}>{btn}</button>
          </div>
          <h3 className='title'>{title}</h3>
          <p className='about-description'>{description}</p>
        </div>

    )
  }
}

export default About
