// DEPENDENCIES
import React from 'react'
import axios from 'axios'


import SearchBar from '../Components/SearchBar'
import NoVideos from '../Components/NoVideos'
import VideoCards from '../Components/VideoCards'

class Home extends React.Component {
  constructor () {
    super ()
      this.state = {
        showVideos: false,
        videos: [],
      }
   }



   getVideos = (searchCriteria) => {
     axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&kind=video&q=${searchCriteria}&key=${process.env.REACT_APP_API_KEY }`)
       .then(response => {
         this.setState({
           videos: response.data.items,
           showVideos: true
         })
       })
   }

   toggleVideos = () => {
     this.setState({
       showVideos: !this.state.showVideos
     })
   }

  render () {
    return (
      <div className="Home">
        <SearchBar getVideos={this.getVideos}/>
        {
          this.state.showVideos
          ? <VideoCards videos={this.state.videos} />
        : <NoVideos />
        }
      </div>
    )
  }
}

export default Home
