import React, {Component} from "react"
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import FAQ from "../components/FAQ/FAQ";
import CompaniesList from "../components/CompaniesList/CompaniesList";

class IndexPage extends Component {
  render() {
    const pageData = this.props.data.wordpressPage.acf;
    console.log(pageData);

    return (
      <div>
        <Header logo={pageData.logo && pageData.logo.source_url}
                linkedin={pageData.linkedin && pageData.linkedin.source_url}
                btn={pageData.header_btn}
        />
        <Hero title={pageData.hero_title}
              description={pageData.hero_description}
              background={pageData.hero_background && pageData.hero_background.source_url}
        />
        <About name={pageData.about_name}
               location={pageData.about_location}
               avatar={pageData.about_avatar && pageData.about_avatar.source_url}
               btn={pageData.about_btn}
               title={pageData.about_title}
               description={pageData.about_description}
        />
        <CompaniesList companiesTitle={pageData.companies_title}
                       companiesLogo={pageData.companies_logo && pageData.companies_logo}
        />
        <FAQ titleAnswer={pageData.faq_title_answer}
             titleQuestion={pageData.faq_title_qestion}
             titleImg={pageData.faq_title_img && pageData.faq_title_img.source_url}
             cardTitle={pageData.faq_card_title}
             cardDescription={pageData.faq_card_description}
             name={pageData.about_name}
             location={pageData.about_location}
             avatar={pageData.about_avatar && pageData.about_avatar.source_url}
        />
      </div>
    )
  }
}

export default IndexPage

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
               companies_title
               companies_logo{
                 companies_image {
                   source_url
                 }
               }
               faq_title_img{
                 source_url
               }
               faq_title_answer
               faq_title_qestion
               faq_card_title
               faq_card_description
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