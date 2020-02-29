import React, {Component} from 'react'
import './podcastfooter.css'

class PodcastFooter extends Component {
    render() {
        return (
            <div className="podcast-buttons wrapper">
                <a href="https://podcasts.apple.com/de/podcast/plausch-mit-paul/id1490706402">
                    <img src="https://admin.anderie.com/wp-content/uploads/2020/02/podcast-apple.png" alt="Listen on Apple Podcasts" />
                </a>
                <a href="https://open.spotify.com/show/5cakUaOYgZqt69HvwGWXcy">
                    <img src="https://admin.anderie.com/wp-content/uploads/2020/02/podcast-spotify.png" alt="Listen on Spotify" />
                </a>
            </div>
        )
    }
}

export default PodcastFooter
