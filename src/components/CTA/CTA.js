import React, {Component} from 'react'

import './cta.css'

class CTA extends Component {
  render() {
    const { title,btn} = this.props;
    return (
      <div className='cta wrapper'>
        <h1>{title}</h1>
        <button className='btn'>{btn}</button>
      </div>
    );
  }
}

export default CTA