import React, {Component} from 'react'
import './trustpilot.css'

class Trustpilot extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className='trustpilot'>
        <h2>{title}</h2>
        <p className='subtitle'>{subtitle}</p>
        <div id="pewl" className="wrapper">

        </div>
      </div>
    )
  }
}

export default Trustpilot
