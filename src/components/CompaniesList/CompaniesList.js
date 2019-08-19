import React, {Component} from 'react'
import './companiesList.css'

class CompaniesList extends Component {
  render() {
    const {companiesTitle, companiesLogo} = this.props;
    return (
      <div className='companies-list wrapper' >
        {companiesTitle && <h2 className='title'>{companiesTitle}</h2>}
        <div className='logo-list'>
          {companiesLogo && companiesLogo.map((logo, index) => {
            return (<img key={index} src={logo.companies_image.source_url} alt=""/>)
          })}
        </div>
      </div>
    )
  }
}

export default CompaniesList
