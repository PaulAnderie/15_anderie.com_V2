import React, {Component} from "react"
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

class PageTemplate extends Component {
  render() {
    const pageData = this.props.data.wordpressPage.acf;
    console.log(pageData);

    return (
      <div>
        <Header logo={pageData.logo.source_url}
                linkedin={pageData.linkedin.source_url}
                btn={pageData.header_btn}
        />
        <Hero title={pageData.hero_title}
              description={pageData.hero_description}
              background={pageData.hero_background.source_url}
        />
        <About name={pageData.about_name}
               location={pageData.about_location}
               avatar={pageData.about_avatar.source_url}
               btn={pageData.about_btn}
               title={pageData.about_title}
               description={pageData.about_description}
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
               logo{
                source_url
               }
               linkedin{
                source_url
               }
               header_btn    
               hero_title
               hero_background {
                 source_url
               }
               hero_description
               about_avatar {
                 source_url
               }
               about_name
               about_location
               about_btn
               about_title
               about_description
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