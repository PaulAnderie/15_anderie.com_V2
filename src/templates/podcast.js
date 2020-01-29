import React, {Component} from "react"
import { Helmet } from "react-helmet"
import EpisodeBox from "../components/Podcast/EpisodeBox";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header";

class PodcastPage extends Component {
    render() {
        console.log("this.props:", this.props);
        const podcast = this.props.data.allWordpressWpPodcast.edges;
        const pageData = this.props.data.wordpressPage.acf;
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
                <Hero   title={"Plausch mit Paul"}
                        background={pageData.hero_background && pageData.hero_background.source_url}
                />
                {podcast &&
                    podcast.map(edge => (
                        <EpisodeBox episodeData={edge.node} />
                    ))
                }
            </div>
        )
    }
}

export default PodcastPage

export const podcastQuery = graphql`
    query podcastQuery {
        allWordpressWpPodcast {
            edges {
                node {
                    title
                    slug
                    download_link
                    date(formatString: "MMMM DD, YYYY")
                    content
                }
            }
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
