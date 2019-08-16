import React, {Component} from 'react'
import Slider from 'react-slick';
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './events.css'

class Events extends Component {
  render() {
    const { title, subtitle, cards, link} = this.props;
    console.log(link);
    return (
      <div className='events wrapper'>
        <h3>{title}</h3>
        <p className='events-subtitle'>{subtitle}</p>
        <div className='cards-event'>
          {cards && cards.map(card => {
            return (
              <a href={card.target_blank} className='card'>
                <div className='card-preview'>
                  <img className='card-img' src={card.event_img.source_url} alt=""/>
                  {card.event_position_icon && <span className='position-icon' style={{backgroundImage: `url(${card.event_position_icon.source_url})`}}/>}
                  <span className='position-text'>{card.event_position_text}</span>
                  <span className='date'>{card.event_date}</span>
                </div>
                <div className='card-body'>
                  <p className='card-description'>{card.event_description}</p>
                  <button className='btn white-with-border'>
                    {card.event_btn}
                  </button>
                </div>
              </a>)
          })}
        </div>
      </div>
    );
  }
}

export default Events