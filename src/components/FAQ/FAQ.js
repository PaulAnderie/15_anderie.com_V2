import React, {Component} from 'react'
import './faq.css'

class CompaniesList extends Component {
  render() {
    const { titleAnswer, titleQuestion, titleImg, name, location,
            avatar, cardTitle, cardDescription, about, availability, help, mobileQuestion} = this.props;
    return (
      <div className='faq wrapper' >
        <div className='faq-title'>
          <div className='title'>
            <h4>{titleQuestion}</h4>
            <h3>{titleAnswer}</h3>
          </div>
          <h3 className='mobile'>{mobileQuestion}</h3>
          <img src={titleImg} alt=""/>
        </div>
        <div className='faq-card'>
          <div className='card-title'>
            <div className='profile'>
              <img className='profile-img' src={avatar} alt=""/>
              <div className='profile-position'>
                <h2>{name}</h2>
                <span>{location}</span>
              </div>
            </div>
            <h4>{cardTitle}</h4>
          </div>
          <div className='card-description' dangerouslySetInnerHTML={{ __html: cardDescription }} />
          <div className='faq-footer'>
            <div className='faq-about'>
              {about && <h3>{about.about_title}</h3>}
              {about && <p>{about.about_description}</p>}
            </div>
            <div className='faq-availability'>
              {availability && <h3>{availability.availability_title}</h3>}
              {availability && <div className='status'>
                <span style={{backgroundColor: `${availability.availability_color}`}} className='status-logo'/>{availability.availability_status}
              </div>}
            </div>
            <div className='faq-help'>
              {help && <h3>{help.help_title}</h3>}
              {availability && <button className='btn' onClick={()=>{Calendly.initPopupWidget({url: 'https://calendly.com/paul-anderie/ask-me-anything'});return false;}}>{help.help_cta}</button>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompaniesList
