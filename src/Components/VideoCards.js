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
          <Link to="video/1" ><VideoCard id={1}/></Link>
          <Link to="video/2"><VideoCard id={2}/></Link>
          <Link to="video/3"><VideoCard id={3}/></Link>
          <Link to="video/4"><VideoCard id={4}/></Link>
          <Link to="video/5"><VideoCard id={5}/></Link>
          <Link to="video/6"><VideoCard id={6}/></Link>
        </main>

      </div>
    )
  }
}

export default VideoCards
