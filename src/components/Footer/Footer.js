import React, {Component} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/fontawesome-free-brands'
import './footer.css'
import Link from "gatsby-link";
import german from '../../assets/img/flag-for-germany.png'
import english from '../../assets/img/flag-for-united-states.png'
class Footer extends Component {
  render() {
    const {foooterLogo, projects, legal, mediaTitle, mediaUrls, slug, linkedinUrl} = this.props;
    return (
      <footer className='footer big-wrapper'
      >
        <div className='logo-section'>
          <Link  className='footer-logo' to="/">
            <img src={foooterLogo} alt=""/>
          </Link>
          <div className='flags'>
            <Link  className={`logo ${slug !== 'home' && 'disable'}`} to="/home/">
              <img src={german} alt=""/>
            </Link>
            <Link className={`linkedin ${slug === 'home' && 'disable'}`} to="/">
              <img src={english} alt=""/>
            </Link>
          </div>
        </div>
        <div className='footer-menu'>
          <div className='projects'>
            <h4>Projects</h4>
            <ul >
              {projects && projects.map((item, index)=>{
                return( <li key={index}><a href={item.project_link}>{item.project_title}</a></li>)
              })}
            </ul>
          </div>
          <div className='legal'>
            <h4>Legal</h4>
            <ul>
              {legal && legal.map((item, index)=>{
                return( <li key={index}><a href={item.legal_link}>{item.legal_title}</a></li>)
              })}
            </ul>
          </div>
        </div>
        <div className='media-socials'>
          <h4>{mediaTitle}</h4>
          <div className='media-icons'>
            {mediaUrls && <a href={mediaUrls.instagram_url}>
              <FontAwesomeIcon icon={faInstagram}/>
            </a>}
            {linkedinUrl && <a href={linkedinUrl}>
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>}
            {mediaUrls && <a href={mediaUrls.whatsapp_url}>
              <FontAwesomeIcon icon={faWhatsapp}/>
            </a>}
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
