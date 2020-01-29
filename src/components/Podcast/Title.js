import React, {Component} from 'react'
import './title.css'

class EpisodeTitle extends Component {
  render() {
    const {title, background} = this.props;
    return (
      <div className='hero'
           style={{backgroundImage: `url(${background})`}}
      >
        <h1 className='title'>{title}</h1>
      </div>
    )
  }
}

export default EpisodeTitle
