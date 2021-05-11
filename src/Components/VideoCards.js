// DEPENDENCIES
import React from 'react'
import {
  Link
} from "react-router-dom";

import VideoCard from './VideoCard'

class VideoCards extends React.Component {

  render () {
    return (
      <div>
        <main>
          <h2>A List of Videos</h2>
          {
            this.props.videos.map(video=> {
              return (
                <Link key={video.id.videoId} to={`/video/${video.id.videoId}`} >
                  <VideoCard video={video}/>
                </Link>
              )
            })
          }
        </main>
      </div>
    )
  }
}

export default VideoCards
