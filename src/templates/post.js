import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {

        return (
            <div>

            </div>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`