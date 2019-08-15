import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

const TemplateWrapper = ({ children,  data }) => (

  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"/>
      <script type="text/javascript" src="https://www.provenexpert.com/widget/landing_prandible-ehrliches-online-training.js?feedback=1&avatar=0&competence=1&style=white"/>
      <link rel="stylesheet" type="text/css" href="https://www.provenexpert.com/css/widget_landing.css" media="screen,print"/>
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
