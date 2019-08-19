import React, {Component} from 'react'

import './cta.css'

class CTA extends Component {
  render() {
    const { title,btn} = this.props;
    return (
      <div className='cta wrapper'>
        <h2>{title}</h2>
        <button className='btn white' onClick={()=>{Calendly.initPopupWidget({url: 'https://calendly.com/paul-anderie/ask-me-anything'});return false;}}>{btn}</button>
      </div>
    );
  }
}

export default CTA