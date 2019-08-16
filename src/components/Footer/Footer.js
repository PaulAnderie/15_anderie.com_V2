import React, {Component} from 'react'

import './footer.css'

class Footer extends Component {
  render() {
    const {foooterLogo, projects, legal, mediaTitle, mediaIcons} = this.props;
    return (
      <footer className='footer big-wrapper'
      >
        <div>
          {foooterLogo}
        </div>
        <div className='projects'>
          <h2>Projects</h2>
          <ul >
            {projects.map((item)=>{
              return( <li><a href={item.project_link}>{item.project_title}</a></li>)
            })}
          </ul>
        </div>
        <div className='legal'>
          <h2>Legal</h2>
          <ul>
            {legal.map((item)=>{
              return( <li><a href={item.legal_link}>{item.legal_title}</a></li>)
            })}
          </ul>
        </div>

        <div className='media-socials'>
          <h2>{mediaTitle}</h2>
          <div className='media-icons'>
            {mediaIcons.length > 0 &&  mediaIcons.map((icon)=>{
              return(<a href={icon.media_link}>
                <img src={icon.media_logo.source_url} alt=""/>
              </a>)
            })}
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
