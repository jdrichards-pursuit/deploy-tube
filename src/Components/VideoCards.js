// DEPENDENCIES
import { Component } from 'react'
import {
  Link
} from "react-router-dom"


import VideoCard from './VideoCard'

class VideoCards extends Component {

  render () {
    return (
      <div>
        <main>
          {
            this.props.videos.map((video, i)=> {
              return (
                <Link key={video.id.videoId + i} to={`/video/${video.id.videoId}`} >
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
