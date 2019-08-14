import React, {Component} from 'react'
import './faq.css'

class CompaniesList extends Component {
  render() {
    const { titleAnswer, titleQuestion, titleImg, name, location, avatar, cardTitle, cardDescription} = this.props;
    return (
      <div className='faq wrapper' >
        <div className='faq-title'>
          <div className='title'>
            <span>{titleQuestion}</span>
            <h2>{titleAnswer}</h2>
          </div>
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
            <h4></h4>
          </div>


        </div>
      </div>
    )
  }
}

export default CompaniesList
