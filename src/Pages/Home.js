// DEPENDENCIES
import React from 'react'

import SearchBar from '../Components/SearchBar'
import NoVideos from '../Components/NoVideos'
import VideoCards from '../Components/VideoCards'

class Home extends React.Component {
  constructor () {
    super ()
      this.state = {
        showVideos: false
      }
   }
   toggleVideos = () => {
     this.setState({
       showVideos: !this.state.showVideos
     })
   }
  render () {
    return (
      <div className="Home">
        <SearchBar />
        <NoVideos />
        <h3 style={{color: "blue" }} onClick={this.toggleVideos}>Toggle Videos (temporary until API connected)</h3>
        {
          this.state.showVideos
          ? <VideoCards />
        : <NoVideos />
        }
      </div>
    )
  }
}

export default Home
