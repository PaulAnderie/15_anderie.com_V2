import React, {Component} from "react"
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import FAQ from "../components/FAQ/FAQ";
import CompaniesList from "../components/CompaniesList/CompaniesList";
import Services from "../components/Services/Services";
import Trustpilot from "../components/Trustpilot/Trustpilot";
import Events from "../components/Events/Events";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

class IndexPage extends Component {
  render() {
    const pageData = this.props.data.wordpressPage.acf;
    console.log(this.props.data.wordpressPage.slug);

    return (
      <div>
        <Header logo={pageData.logo && pageData.logo.source_url}
                linkedinImg={pageData.linkedin.linkedin_img && pageData.linkedin.linkedin_img.source_url}
                linkedinUrl={ pageData.linkedin.linkedin_url}
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
        <Services title={pageData.services_title}
                  subtitle={pageData.services_subtitle}
                  btn={pageData.services_btn}
                  cards={pageData.service_card}
        />
        <FAQ titleAnswer={pageData.faq_title_answer}
             titleQuestion={pageData.faq_title_question}
             mobileQuestion={pageData.faq_title_question_mobile}
             titleImg={pageData.faq_title_img && pageData.faq_title_img.source_url}
             cardTitle={pageData.faq_card_title}
             cardDescription={pageData.faq_card_description}
             name={pageData.about_name}
             location={pageData.about_location}
             avatar={pageData.about_avatar && pageData.about_avatar.source_url}
             about={pageData.about_avatar && pageData.faq_about}
             availability={pageData.about_avatar && pageData.faq_availability}
             help={pageData.about_avatar && pageData.faq_help}
        />
        <Events title={pageData.events_title}
                subtitle={pageData.events_subtitle}
                cards={pageData.events_card}
        />
        <Trustpilot title={pageData.trustpilot_title}
                    subtitle={pageData.trustpilot_subtitle}
        />
        <CompaniesList companiesLogo={pageData.companies_logo && pageData.companies_logo} />
        <CTA btn={pageData.cta_btn}
             title={pageData.cta_title}
        />
        <Footer foooterLogo={pageData.logo && pageData.logo.source_url}
                projects={pageData.projects}
                legal={pageData.legal}
                mediaTitle={pageData.media_social_title}
                mediaIcons={pageData.media_social_icons}
                slug={this.props.data.wordpressPage.slug}
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
                linkedin_img{
                   source_url
                }
                linkedin_url
               }
               header_btn
               hero_title
               hero_background  {
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
               services_title
               services_subtitle
               services_btn
               service_card {
                 service_title 
                 service_description
               }
               faq_title_img{
                 source_url
               }
               faq_title_answer
               faq_title_question
               faq_title_question_mobile
               faq_card_title
               faq_card_description
               faq_about{
                 about_title
                 about_description
               }
               faq_availability{
                 availability_title
                 availability_status
                 availability_color
               }
               faq_help{
                 help_cta
                 help_title
               }
               events_card{
               target_blank
               event_btn
               event_img{
                 source_url
               }
               event_date
               event_description
               event_position_icon{
                 source_url
               }
               event_position_text
               }
               events_title
               events_subtitle
               trustpilot_title
               trustpilot_subtitle
               cta_btn
               cta_title
               footer_logo
               projects{
                 project_link
                 project_title
               }
               legal{
                 legal_link
                 legal_title
               }
               media_social_title
               media_social_icons{
                 media_link
                 media_logo{
                   source_url
                 }
               }
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