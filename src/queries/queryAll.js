'use strict'

module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                }
            }
        }
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
                    title
                    date
                }
            }
        }

        allWordpressWpPodcast {
            edges {
                node {
                    id
                    title
                    slug
                    download_link
                    date
                    content
                }
            }
        }
    }
`
