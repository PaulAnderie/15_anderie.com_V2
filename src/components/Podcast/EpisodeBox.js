import React, {Component} from 'react'
import './episode.css'

class EpisodeBox extends Component {
    render() {
        const {episodeData} = this.props;
        return (
            <div className='episode wrapper'>
                <div className='episode-header'>
                    <a className='btn' href='https://mailchi.mp/389bb5063a99/plauschmitpaul'>Subscribe</a>
                    <a href={'/podcast/' + episodeData.slug}>
                        <h2 className='title'>{episodeData.title}</h2>
                    </a>
                </div>
                <div className='episode-player'>
                    <audio controls>
                        <source src={episodeData.download_link} />
                    </audio>
                </div>
                <div dangerouslySetInnerHTML={{ __html: episodeData.content }} />
            </div>
        )
    }
}

export default EpisodeBox
