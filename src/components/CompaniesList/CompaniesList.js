import React, {Component} from 'react'
import './companiesList.css'

class CompaniesList extends Component {
  render() {
    const {companiesTitle, companiesLogo} = this.props;
    return (
      <div className='companies-list wrapper' >
        {companiesTitle && <h3 className='title'>{companiesTitle}</h3>}
        <div className='logo-list'>
          {companiesLogo && companiesLogo.map(logo => {
            return (<img src={logo.companies_image.source_url} alt=""/>)
          })}
        </div>
      </div>
    )
  }
}

export default CompaniesList
