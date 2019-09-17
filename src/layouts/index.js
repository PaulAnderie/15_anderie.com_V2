import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

const TemplateWrapper = ({ children,  data }) => (

  <div>
    <Helmet
      title="Paul Anderie - Digital Marketing Trainer & Consultant"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"/>
      <script type="text/javascript" src="https://www.provenexpert.com/widget/landing_prandible-ehrliches-online-training.js?feedback=1&avatar=0&competence=1&style=white"/>
      <link rel="stylesheet" type="text/css" href="https://www.provenexpert.com/css/widget_landing.css" media="screen,print"/>
    <script type="application/ld+json">{`
      {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Paul Anderie",
        "url": "https://anderie.com",
        "image": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj7nJ7Ato7kAhUFPVAKHfsDDzIQjRx6BAgBEAQ&url=https%3A%2F%2Ftwitter.com%2Fpaulanderie&psig=AOvVaw3HMBACaHtwbwGk_ehukQU1&ust=1566286623820876",
        "sameAs": [
          "https://www.linkedin.com/in/paulanderie/",
          "https://www.instagram.com/paulanderie/",
          "https://twitter.com/paulanderie",
          "https://www.facebook.com/paul.anderie"
        ],
        "jobTitle": "Founder and Entrepreneur",
        "worksFor": {
          "@type": "Organization",
          "name": "prandible"
        }
      }
  `}</script>
    </Helmet>
    {children()}
  </div>
)


export default TemplateWrapper
