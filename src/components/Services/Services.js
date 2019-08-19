import React, {Component} from 'react'

import './services.css'

class Services extends Component {
  render() {
    const { title, btn, cards, subtitle} = this.props;
    return (
      <div className='services wrapper '>
        <h4>{title}</h4>
        <p className='subtitle'>{subtitle}</p>
        <div className='card-section scrollbar'>
          {cards && cards.map((card, index) => {
          return (
            <div key={index} className='card'>
              <h3>{card.service_title}</h3>
              <p>{card.service_description}</p>
            </div>)
          })}
        </div>
        <button className='btn' onClick={()=>{Calendly.initPopupWidget({url: 'https://calendly.com/paul-anderie/ask-me-anything'});return false;}}>
          {btn}
        </button>
      </div>
    );
  }
}

export default Services
