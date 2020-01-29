import React, {Component} from "react"
import { Helmet } from "react-helmet"
import EpisodeBox from "../components/Podcast/EpisodeBox";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header";

class EpisodePage extends Component {
  render() {
      const episodeData = this.props.data.wordpressWpPodcast;
      const pageData = this.props.data.wordpressPage.acf;

      console.log("episodeData:", episodeData);
      console.log("this.props:", this.props);

    return (
        <div>
            <Helmet>
                <link rel="alternate" type="application/rss+xml" title="Podcast Feed" href="https://admin.anderie.com/podcast/feed/" />
            </Helmet>
            <Header logo={pageData.logo && pageData.logo.source_url}
                    linkedinImg={pageData.linkedin.linkedin_img && pageData.linkedin.linkedin_img.source_url}
                    linkedinUrl={ pageData.linkedin.linkedin_url}
                    btn={pageData.header_btn}
            />
            <Hero   title={episodeData.title}
                    background={pageData.hero_background && pageData.hero_background.source_url}
            />
            <EpisodeBox episodeData={episodeData} />
        </div>
    )
  }
}

export default EpisodePage

export const pageQuery = graphql`
    query currentPodcastQuery($id: String!) {
        wordpressWpPodcast(id: { eq: $id }) {
            slug
            title
            download_link
            date(formatString: "MMMM DD, YYYY")
            content
        }

        wordpressPage(slug: { eq: "paul-landing" }) {
            acf {
                logo {
                    source_url
                }
                linkedin {
                    linkedin_img {
                        source_url
                    }
                    linkedin_url
                }
                header_btn
                hero_background {
                    source_url
                }
            }
        }

    }
`
