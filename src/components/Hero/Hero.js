import React, {Component} from 'react'
import './hero.css'

class Hero extends Component {
  render() {
    const {title, description, background} = this.props;
    return (
      <div className='hero'
           style={{backgroundImage: `url(${background})`}}
      >
        <h1 className='title'>{title}</h1>
        <p className='description'>{description}</p>

      </div>
    )
  }
}

export default Hero
