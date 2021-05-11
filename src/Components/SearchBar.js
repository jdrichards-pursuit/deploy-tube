import React from 'react'

class SearchBar extends React.Component {
  // control input
  // submit goes back up to top Component
  constructor () {
    super()
    this.state = {
      video: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getVideos(this.state.video)
    this.setState({video: ''})
  }

  render () {
    return (
      <div>
        <h2>Search Bar</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="video">Search:</label>
            <input type="text" placeholder="search for a video" id="video" value={this.state.video} onChange={this.handleChange}/>
            <input type="submit" />
          </form>
      </div>
    )
  }
}

export default SearchBar
