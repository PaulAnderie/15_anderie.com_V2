import React, {Component} from 'react'

import './cta.css'

class CTA extends Component {
  render() {
    const { title,btn} = this.props;
    return (
      <div className='cta wrapper'>
        <h2>{title}</h2>
        <button className='btn white'>{btn}</button>
      </div>
    );
  }
}

export default CTA