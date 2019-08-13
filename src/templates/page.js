import React, {Component} from "react"
import Header from "../components/Header";

class PageTemplate extends Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const pageData = this.props.data.wordpressPage;
    console.log(pageData.acf.logo);

    return (
      <div>
        <Header logo={pageData.acf.logo}
                linkedin={pageData.acf.linkedin}
                btn={pageData.acf.btn}
        />
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            acf {
               logo
               linkedin
               btn    
            }
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`