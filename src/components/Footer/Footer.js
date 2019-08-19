import React, {Component} from 'react'

import './footer.css'
import Link from "gatsby-link";
import german from '../../assets/img/flag-for-germany.png'
import english from '../../assets/img/flag-for-united-states.png'
class Footer extends Component {
  render() {
    const {foooterLogo, projects, legal, mediaTitle, mediaIcons, slug} = this.props;
    return (
      <footer className='footer big-wrapper'
      >
        <div className='logo-section'>
          <img className='footer-logo' src={foooterLogo} alt=""/>
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
            <h2>Projects</h2>
            <ul >
              {projects && projects.map((item, index)=>{
                return( <li key={index}><a href={item.project_link}>{item.project_title}</a></li>)
              })}
            </ul>
          </div>
          <div className='legal'>
            <h2>Legal</h2>
            <ul>
              {legal && legal.map((item, index)=>{
                return( <li key={index}><a href={item.legal_link}>{item.legal_title}</a></li>)
              })}
            </ul>
          </div>
        </div>
        <div className='media-socials'>
          <h2>{mediaTitle}</h2>
          <div className='media-icons'>
            {mediaIcons && mediaIcons.length > 0 &&  mediaIcons.map((icon, index)=>{
              return(<a href={icon.media_link}>
                {icon.media_logo && <img key={index} src={icon.media_logo.source_url} alt=""/>}
              </a>)
            })}
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
