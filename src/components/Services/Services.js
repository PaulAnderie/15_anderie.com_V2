import React, {Component} from 'react'

import './services.css'

class Services extends Component {
  render() {
    const { title, btn, cards, subtitle} = this.props;
    return (
      <div className='services wrapper'>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className='card-section'>
          {cards && cards.map(card => {
          return (
          <div className='card'>
          <h2>{card.service_title}</h2>
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

// export default class Services extends Component {
//   render() {
//     var settings = {
//       unslick: true,
//       responsive: [
//         {
//           breakpoint: 800,
//           settings: {
//             infinite: true,
//             dots: false,
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             initialSlide: 0,
//             arrow: true,
//           }
//         }
//       ]
//     };
//     return (
//       <div>
//         <h2> Responsive </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }