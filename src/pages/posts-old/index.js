import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

class PostsTemplate extends Component {
    render() {
        const data = this.props.data

        return(
            <div>
            </div>
        )
    }
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`