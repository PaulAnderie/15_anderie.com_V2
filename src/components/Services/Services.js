import React, {Component} from 'react'
import Slider from 'react-slick';
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './services.css'

class Services extends Component {
  render() {
    const { title, btn, cards} = this.props;
    const settings = {
      speed: 500,
      slidesToShow: 3,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='services wrapper'>
        <div dangerouslySetInnerHTML={{__html: title}}/>
        <div className='card-section'>
          {cards && cards.map(card => {
          return (
          <div className='card'>
          <h3>{card.service_title}</h3>
          <p>{card.service_description}</p>
          </div>)
          })}
        </div>
        <button className='btn'>
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